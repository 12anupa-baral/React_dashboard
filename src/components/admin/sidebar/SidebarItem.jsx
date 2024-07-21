import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const activeLink = ({ isActive }) => (isActive ? "active" : "link");
const activeSubLink = ({ isActive }) => (isActive ? "active" : "link");

function SidebarItem({ item, isOpen, setIsOpen }) {
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setExpandMenu(false);
    }
  }, [isOpen, setIsOpen]);

  const hideSidebar = () => {
    setExpandMenu(false);
    setIsOpen(false);
  };

  const toggleExpandMenu = () => {
    setExpandMenu(!expandMenu);
  };

  if (item.children) {
    return (
      <div className="sidebar-item s-parent">
        <div className="sidebar-item-header" onClick={toggleExpandMenu}>
          <div className="icon">{item.icon && <item.icon />}</div>
          {isOpen && <div className="title">{item.title}</div>}
          {isOpen && (
            <div className="arrow">
              {expandMenu ? <MdKeyboardArrowRight /> : <MdKeyboardArrowRight />}
            </div>
          )}
        </div>
        {expandMenu && isOpen && (
          <div className="sidebar-submenu">
            {item.children.map((subItem, index) => (
              <NavLink
                key={index}
                to={subItem.path}
                className={activeSubLink}
                onClick={hideSidebar}
              >
                <div className="sidebar-subitem">
                  {subItem.icon && <div className="icon"><subItem.icon /></div>}
                  <div className="title">{subItem.title}</div>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className={activeLink} onClick={hideSidebar}>
        <div className="sidebar-item s-parent">
          <div className="icon">{item.icon && <item.icon />}</div>
          {isOpen && <div className="title">{item.title}</div>}
        </div>
      </NavLink>
    );
  }
}

export default SidebarItem;
