import React from "react";
import { BrowserRouter as Router, Route, Link, Outlet, Routes } from "react-router-dom";

function Profile() {
  return (
    <div>
      profile page
      <nav>
        <Link to="me">My Profile</Link>
      </nav>
      {/*
       将直接根据上面定义的不同路由参数，渲染<MyProfile />或<OthersProfile />
        */}
      <Outlet />
    </div>
  )
}

export default Profile;