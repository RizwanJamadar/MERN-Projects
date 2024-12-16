import React from 'react'
import PaginationTable from '../../components/pagiTable/PaginationTable'
import {dummyData} from "../../constant"
import { Link } from 'react-router-dom';
import './leave.css'

const RequestLeave = () => {
    const columns = [
        { id: 'srno', label: 'SNo', minWidth: 50 },
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'department', label: 'Department', minWidth: 100 },
        { id: 'type', label: 'Type', minWidth: 100 },
        { id: 'from', label: 'From', minWidth: 100 },
        { id: 'to', label: 'To', minWidth: 100 },
        { id: 'days', label: 'Days', minWidth: 100 },
        { id: 'action', label: 'Action', minWidth: 100 },
      ];

  return (
    <div className='requestedLeave'>
        <div className="show">
        <div className="top space-between">
        <h3>Requested Leaves</h3>
        <Link to="/addLeaveList">
          <button type="submit" className="btn">Add Leave</button>
          </Link>
        </div>
        <div className="table">
            <PaginationTable columns={columns} Data={dummyData} count={6}/>
        </div>
        </div>
    </div>
  )
}

export default RequestLeave