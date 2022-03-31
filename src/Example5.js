import React, {useState, createContext, useContext } from 'react'
// useContext 实现父子组件传值
const CountContext = createContext()  // 创建一个上下文 count被共享出去

function Counter() { // 子组件接受count
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

function Example5() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={ ()=> {setCount(count+1)}}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
      
    </div>
  )

}

export default Example5
