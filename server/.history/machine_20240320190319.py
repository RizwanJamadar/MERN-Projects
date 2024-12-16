import sys
import pandas as pd
from datetime import datetime, timedelta
from sklearn.ensemble import RandomForestRegressor
import json
import random  # Import the random module

def generate_dummy_data(deadline):
    data = {
        'workload': [],
        'pending_tasks': [],
        'salary': [],
        'leave_start': [],
        'leave_end': []
    }
    for i in range(1000):
        workload = random.randint(30, 120)
        pending_tasks = random.randint(1, 10)
        salary = random.randint(3000, 7000)
        leave_start = deadline - timedelta(days=random.randint(1, 30))
        leave_end = leave_start + timedelta(days=random.randint(1, 10))

        data['workload'].append(workload)
        data['pending_tasks'].append(pending_tasks)
        data['salary'].append(salary)
        data['leave_start'].append(leave_start.strftime('%Y-%m-%d'))
        data['leave_end'].append(leave_end.strftime('%Y-%m-%d'))

    df = pd.DataFrame(data)
    df['leave_start'] = pd.to_datetime(df['leave_start'])
    df['leave_end'] = pd.to_datetime(df['leave_end'])
    return df

def adjust_leave_dates(start_date, end_date, deadline, leave_days):
    adjusted_start_date = max(start_date, datetime.today() + timedelta(days=1))
    adjusted_start_date = min(adjusted_start_date, deadline - timedelta(days=leave_days))
    adjusted_end_date = adjusted_start_date + timedelta(days=leave_days - 1)
    adjusted_end_date = min(adjusted_end_date, deadline)
    return adjusted_start_date, adjusted_end_date

def main(args):
    try:
        workload, pending_tasks, salary, deadline_str, leave_days = args

        # Convert string arguments to appropriate data types
        workload = float(workload)
        pending_tasks = float(pending_tasks)
        salary = float(salary)
        leave_days = float(leave_days)

        deadline = datetime.strptime(deadline_str, '%Y-%m-%d')

        # Generate dummy data
        df = generate_dummy_data(deadline)

        # Initialize and train the model for leave start prediction
        X_train = df[['workload', 'pending_tasks', 'salary']]
        y_start_train = df['leave_start']
        rf_start = RandomForestRegressor()
        rf_start.fit(X_train, y_start_train)

        # Initialize and train the model for leave end prediction
        y_end_train = df['leave_end']
        rf_end = RandomForestRegressor()
        rf_end.fit(X_train, y_end_train)

        # Predict leave start and end dates
        start_prediction = rf_start.predict([[workload, pending_tasks, salary]])[0]
        end_prediction = rf_end.predict([[workload, pending_tasks, salary]])[0]

        # Convert predictions to datetime objects
        start_prediction = pd.to_datetime(start_prediction)
        end_prediction = pd.to_datetime(end_prediction)

        # Adjust leave dates based on the project deadline
        adjusted_start_date, adjusted_end_date = adjust_leave_dates(start_prediction, end_prediction, deadline, leave_days)

        # Prepare result
        result = {
            "adjusted_start_date": adjusted_start_date.strftime('%Y-%m-%d'),
            "adjusted_end_date": adjusted_end_date.strftime('%Y-%m-%d')
        }
        print(json.dumps(result))  # Output JSON for Node.js to parse
    except Exception as e:
        print(json.dumps({"error": str(e)}))  # Output error JSON for Node.js to parse

if __name__ == "__main__":
    main(sys.argv[1:])
