import bodyParser from 'body-parser';
import {spawn} from 'child_process';

async function recommendLeave(req, res) {
    try {
        const { workload, pending_tasks, salary, deadline, days } = req.body;

        // Spawn Python process
        const pythonProcess = spawn('python', ['../machine.py', workload, pending_tasks, salary, deadline, days]);

        let pythonOutput = '';
        let pythonError = '';

        // Flag to track if response has been sent
        let responseSent = false;

        pythonProcess.stdout.on('data', (data) => {
            pythonOutput += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            pythonError += data.toString();
        });

        pythonProcess.on('close', (code) => {
            if (!responseSent) {
                responseSent = true;
                console.log(`child process exited with code ${code}`);
                if (code === 0) {
                    try {
                        const result = JSON.parse(pythonOutput);
                        res.json(result); // Sending the response here after collecting all data
                    } catch (error) {
                        console.error('Error parsing Python script output:', error);
                        res.status(500).json({ error: 'An error occurred while parsing output' });
                    }
                } else {
                    console.error('Python script execution failed:', pythonError);
                    res.status(500).json({ error: 'An error occurred during Python script execution' });
                }
            }
        });

        pythonProcess.on('error', (error) => {
            if (!responseSent) {
                responseSent = true;
                console.error('Error spawning Python process:', error);
                res.status(500).json({ error: 'An error occurred while spawning Python process' });
            }
        });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

export default recommendLeave;