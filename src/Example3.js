import React, {useState, useEffect } from 'react'

function Example3() {
  // useEffect函数代替什么周期
  const [count, setCount] = useState(0)
  useEffect(()=> { // 组件首次渲染 和 之后每次更新都会调用useEffect函数
    console.log(`useEffect => you Clicked ${count} times`)
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={ ()=> {setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Example3
