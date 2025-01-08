import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar w-1/6 min-h-screen border-[2px] border-zinc-400">
      <div className="sidebar-options pt-20 pl-20 flex flex-col gap-14">
        
        <NavLink to='/add' className="sidebar-option flex items-center gap-4 border-[2px] px-2 py-2 cursor-pointer border-zinc-400">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option flex items-center gap-4 border-[2px] px-2 py-2 cursor-pointer border-zinc-400">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option flex items-center gap-4 border-[2px] px-2 py-2 cursor-pointer border-zinc-400">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>

        
      </div>
    </div>
  );
}

export default Sidebar;
