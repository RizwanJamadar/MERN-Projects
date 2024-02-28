import React from 'react'
import './dashboard.css'
import Chart from '../../components/chart/Chart'
import Widgets from '../../components/widgets/Widgets'
import Table2 from '../../components/table/Table2'
import GraphComponent from '../../components/GraphComponent'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="home_widgets">
       <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
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