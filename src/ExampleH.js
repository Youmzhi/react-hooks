import React, {useState} from 'react'
// Hooks语法  react版本16.8.0版本以上支持
function ExampleH() {
  // 数组解构写法
  const [count, setCount] = useState(0)
  // 基础写法
  // const _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={ ()=> {setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default ExampleH

