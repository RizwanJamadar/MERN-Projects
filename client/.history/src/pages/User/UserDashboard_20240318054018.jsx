import React, { useEffect, useState } from "react";
import "./userdashboard.css";
import CircularProgressBar from "../../components/chart/CircularProgress.jsx"
import { Link } from "react-router-dom";
import BarChartGraph from "../../components/chart/BarChart.jsx";


const UserDashboard = () => {
  const [upcomingHolidays,setUpcomingHolidays] = useState([]);

  const fetchData = async () => {
    const country = 'in';
    const year = '2024';

    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/holidays', {
            params: {
                country: country,
                year: year
            },
            headers: {
                'X-Api-Key': 'hwtUa6Kmrp1g/1AZ5yZM4Q==n3cCIUDxjagi0CsA'
            }
        });

        const currentDate = new Date();
        const filteredHolidays = response.data.filter(holiday => {
            const holidayDate = new Date(holiday.date);
            return holidayDate > currentDate;
        });

        filteredHolidays.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });

        const upcomingHolidays = filteredHolidays.slice(0, 8); // Extract first 8 items
        setUpcomingHolidays(upcomingHolidays);
        console.log(upcomingHolidays);
    } catch (error) {
        console.error('Request failed:', error);
    }
};

useEffect(() => {
    fetchData();
}, []);

  return (
    <div className="userdashboard">
      <div className="user_left">
        <div className="user_analysis">
          <div className="heading_top">
            <h4>Leave management</h4>
            <Link to="/applyLeave">
            <button className="user_btn">Request a leave</button>
            </Link>
          </div>
          <div className="heading_bottom">
          <div className="box">
            <CircularProgressBar totalLeaves={30} leavesTaken={16} color="primary"/>
            <div className="headings">
              <h3>Annual Leave</h3>
              <p>Remaining</p>
            </div>
          </div>

          <div className="box">
            <CircularProgressBar totalLeaves={10} leavesTaken={9} color="warning"/>
            <div className="headings">
              <h3>Sick Leave</h3>
              <p>Taken</p>
            </div>
          </div>

          <div className="box">
            <CircularProgressBar totalLeaves={10} leavesTaken={5} color="danger"/>
            <div className="headings">
              <h3>Casual Leave</h3>
              <p>Taken</p>
            </div>
          </div>
          </div>
        </div>
        <div className="user_charts">
          <h3>Last 3 months leave status</h3>
          <BarChartGraph/>
        </div>
      </div>

      <div className="user_right">
        <h4 className="heading">Upcoming public holidays</h4>
        <div className="upcoming_holidays">
          <div className="date">
            <h4>2024-03-20</h4>
            <span>Friday</span>
          </div>
          <div className="day">
            Eid-ul-adha
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
