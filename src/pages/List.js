import React from "react";
import { BrowserRouter as Router, Route, Link, Outlet, Routes, useLocation, useParams, useSearchParams, useMatch } from "react-router-dom";

// v6 新特性
// <Switch>重命名为<Routes>
// <Route>的新特性变更 component/render被element替代
// 嵌套更简单 1 <Route children> 接受子路由 2 比<Route exact>和<Route strict>更简单的匹配规则 3.<Route path>路径层次更清晰
// 新的API: Outlet 实现this.props.children嵌套更简单
// 多个<Routes />
// useNavigate替代useHistory
// 新钩子useRoutes代替react-router-config
// 大小减少：从20kb到8kb
// 参考文章：https://blog.csdn.net/weixin_40906515/article/details/104957712
// 参考文章：https://blog.csdn.net/meng2lin/article/details/103620993
// 参考文章：https://blog.csdn.net/weixin_59489521/article/details/123705760

import MyProfile from './MyProfile'
import OthersProfile from './OthersProfile'

// 如果路由是/me 展示<MyProfile></MyProfile> 是/* 展示<OthersProfile></OthersProfile>
function List(props) {
  const location = useLocation()
  const params = useParams()
  const [search, setSearch] = useSearchParams()
  const match = useMatch('/list/:id')

  console.log(location)
  console.log(params)
  console.log(search)
  console.log(match)
  
  return (
    <div>
      list page
      <nav>
        <Link to="me">My Profile</Link>
      </nav>
      <Routes>
        <Route path="me" element={<MyProfile />} />
        <Route path=":id" element={<OthersProfile />} />
      </Routes>

    </div>
  )
}

export default List;