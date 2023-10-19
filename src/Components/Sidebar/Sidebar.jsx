import React, {useState} from 'react';
import './Sidebar.css';
import { SidebarData } from '../SidebarData/SidebarData';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const[isOpen, setIsOpen]= useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className='Sidebar__container'>
      <div style={{width:isOpen ? "300px": "40px"}} className='sidebar'>
        <div  className="sidebar__header">
          <h1 style={{display:isOpen ? "block": "none"}} className="logo">LOGO</h1>
          <div style={{marginLeft:isOpen ? "20px": "0px"}} className="bars">
            <FaBars onClick={toggleSidebar}/>
          </div>
        </div>
        {SidebarData.map((value, index)=>{
          return(
            <NavLink to={value.path} key={index} className='link' activeclassName='active'>
                <div className='icon'>{value.icon}</div>
                <div style={{display:isOpen ? "block": "none"}} className='title'>{value.title}</div>
            </NavLink>
          )
        })}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
