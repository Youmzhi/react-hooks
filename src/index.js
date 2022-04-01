import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom'

// hooks
import Hooks from './Hooks'


// router
import Index from './pages/Index'
import List from './pages/List'
import Profile from './pages/Profile'

import MyProfile from './pages/MyProfile'
import OthersProfile from './pages/OthersProfile'



ReactDOM.render(
  <Router>
    <ul>
        <li> <Link to="/">首页</Link> </li>
        <li><Link to="/list/123">列表</Link></li>
        <li><Link to="/profile/123">Profile</Link></li>
        <li><Link to="/hooks">Hooks</Link></li>
    </ul>
    <Routes>
        <Route path="/" element={<Index/>} />

        <Route path="/list/*" element={<List/>} />
        
        <Route path="/profile" exact element={<Profile/>}>
          <Route path="me" element={<MyProfile/>}></Route>
          <Route path=":id" element={<OthersProfile/>}></Route>
        </Route>

        <Route path="/hooks" element={<Hooks/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
