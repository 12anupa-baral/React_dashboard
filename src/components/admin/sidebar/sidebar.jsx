import React from 'react';
import "./sidebar.scss";
import menu from "../../../data/sidebar"
import SidebarItem from './SidebarItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {FaLink} from 'react-icons/fa'
import {HiMenuAlt3} from 'react-icons/hi'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const toggle =() => setIsOpen(!isOpen);
  const closeSidebar =() => setIsOpen(false);
  const openSidebar =() => setIsOpen(true);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/admin/home")
  }
  return (
    <div className='layout'>
     
        <div className={isOpen?"sidebar-overlay show-overlay" :"sidebar-overlay"}
        style={{right:isOpen ? '0' : '-100%'}}
        onClick ={closeSidebar}> </div>

        
          <div className="sidebar"
          style={{width:isOpen ?"230px" :"60px"}}
          onMouseEnter={openSidebar}
          onMouseLeave={closeSidebar}
          >
            <div className="top_section">
              <div className="logo" 
              style={{display :isOpen ? "block" :"none"}}>
              <FaLink size={30}  style={{cursor:"pointer"}} onClick={goHome}/>

              </div>

              <div className="bars" 
              style={{marginLeft :isOpen ? "135px" :"0px"}}>
              <HiMenuAlt3  onClick={toggle}/>

              </div>
             
            </div>
            {menu.map((item , index)=>{
                return(
                  <SidebarItem key={index} item={item} menuIndex={index} isOpen={isOpen} setIsOpen={setIsOpen} /> 
                )

              }
            )}
          </div>
         
        

    </div>
  )
}

export default Sidebar