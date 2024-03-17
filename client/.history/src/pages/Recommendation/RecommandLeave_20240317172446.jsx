import React from 'react'
import "./recommend.css"

const RecommandLeave = () => {
  return (
    <div className='recommandLeave'>
      <div className="heading">
        <h1>Welcome to <span>Leave</span> Advisor</h1>
        <p>Your Personal Leave Recommendation System</p>
      </div>
      <div className="form">
        <div class="inputBox">
          <div class="input">
            <span>Workload</span>
            <input type="text" placeholder="Extreme" />
          </div>
          <div class="input">
            <span>Pending Task</span>
            <input type="number" placeholder="4" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Designation</span>
            <input type="text" placeholder="Professor" />
          </div>
          <div class="input">
            <span>Salary</span>
            <input type="number" placeholder="30000" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Work Deadline</span>
            <input type="date" />
          </div>
          <div class="input">
            <span>Duration</span>
            <input type="number" placeholder='2' />
          </div>
        </div>

        <div className="buttons">
        <button type="submit" className="btn">
          Recommend Me
        </button>
        <button type="submit" className="btn">
          Request
        </button>
        </div>
      </div>
    </div>
  )
}

export default RecommandLeave