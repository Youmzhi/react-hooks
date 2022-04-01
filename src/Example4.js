import React, {useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom'
// useEffect 实现 componentWillUnmount生命周期函数
function Index() {
  useEffect(()=>{
    console.log('useEffect => 进入Index Page')
    return ()=> {
      console.log('离开Index Page')
    }
  }, []) // []代表离开页面执行副作用函数 输入：离开Index Page
  return (
    <div>
      Index Page
    </div>
  )
}

function List() {
  useEffect(()=>{
    console.log('useEffect => 进入List Page')
    return ()=> {
      console.log('离开List Page')
    }
  }, [])
  return (
    <div>
      List Page
    </div>
  )
}

function Example4() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    console.log(`useEffect => you Clicked ${count} times `)
    return ()=> {
      console.log('==============================')
    }
  }, [count]) // 参数代表state状态发生改变 触发副作用函数 输出：====== useEfff...
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={ ()=> {setCount(count+1)}}>Click me</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Routes>
          <Route path="/" exact element={<Index/>}></Route>
          <Route path="/list/" element={<List/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )

}

export default Example4
