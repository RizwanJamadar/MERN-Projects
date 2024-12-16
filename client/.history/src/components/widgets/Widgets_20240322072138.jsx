import React from 'react'
import './widgets.css';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const Widgets = ({type,count}) => {
  
  let data;
   
  switch (type) {
    
    case "user":
      data = {
        title: "Total Faculties",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              cursor:"pointer",
            }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "Faculties on Leave",
        isMoney: false,
        link: "View all leave",
        icon: (
          <PersonOffOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              cursor:"pointer",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "Departments",
        isMoney: true,
        link: "View all Dept.",
        icon: (
          <CategoryOutlinedIcon
            className="icon"
            style={{ 
            backgroundColor: "rgba(0, 128, 0, 0.2)", 
            color: "green",
            cursor:"pointer", 
          }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "Working Faculties",
        isMoney: true,
        link: "See details",
        icon: (
          <HomeWorkOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              cursor:"pointer",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widgets">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{count}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets