import React from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate()
  return (
    <div>
      index page
      <button onClick={()=>{ navigate('/list/me')  }}>跳转list页 并且显示MyProfile组件</button>
    </div>
  )
}

export default Index;