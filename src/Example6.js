import React, { useReducer } from "react";

function ReducerDemo() {
  // 参数1 ruducer函数 参数2 初始值; 返回 【返回值, 派发器】;
  const [count, dispatch] = useReducer((state, action)=>{
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={()=>{dispatch('add')}}>Increment</button>
      <button onClick={()=>{dispatch('sub')}}>Decrement</button>
    </div>
  )
}

// Reducer 函数
// function countReducer(state, action) {
//   switch(action.type) {
//     case 'add':
//       return state + 1
//     case 'sub':
//       return state - 1
//     default:
//       return state
//   }
// }

export default ReducerDemo
