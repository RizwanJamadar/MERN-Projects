import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Chart from '../../components/chart/Chart'
import Widgets from '../../components/widgets/Widgets'
import Table2 from '../../components/table/Table2'
import axios from 'axios'

const Dashboard = () => {

  const [count, setCount] = useState({});

  const getCount = async () =>{
    const user = JSON.parse(localStorage.getItem("currentUser"));
    try {
      let endpoint=""
      if(user.Role == "hod"){
        endpoint = `${import.meta.env.VITE_URL_BACK_END}/leaveRequest/CountByHod`
      } else {
        endpoint = `${import.meta.env.VITE_URL_BACK_END}/leaveRequest/countByVp`
      }

      const authToken = user.token;

      const headers = {
        Authorization: `${authToken}`, // Set the content type according to your API requirements
      };

      const res = await axios.get(endpoint,{headers})
      setCount(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getCount()
  },[])

  return (
    <div className='dashboard'>
      <div className="home_widgets">
         <Widgets type="user" count={count.staffCount}/>
          <Widgets type="order" count={count.staffOnLeave} />
          <Widgets type="earning" count={4}/>
          <Widgets type="balance" count={count.workingStaff}/>
       </div>
       <div className="charts">
        <div className="table">
          <Table2/>
        </div>
         {/* <GraphComponent/> */}
          <Chart title="Last 6 months (Leave)" aspect={5/3} />
        </div>
    </div>
  )
}

export default Dashboard