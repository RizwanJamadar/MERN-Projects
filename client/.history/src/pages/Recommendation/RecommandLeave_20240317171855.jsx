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
            <span>Type of Leave</span>
            <input type="text" placeholder="Sick Leave" />
          </div>
          <div class="input">
            <span>Duration</span>
            <input type="text" placeholder="2 days" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Email</span>
            <input type="Email" placeholder="johndoe@sfit.ac.in" />
          </div>
          <div class="input">
            <span>Phone No.</span>
            <input type="number" placeholder="9876543210" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Start Date</span>
            <input type="date" />
          </div>
          <div class="input">
            <span>End Date</span>
            <input type="date" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Attachments</span>
            <input type="file"/>
          </div>
          <div class="input">
            <span>Reason</span>
            <textarea
              placeholder="Medical leave applicable for only 2 days."
              rows={1}
              style={{ resize: "none" }}
            />
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