import React, {useState, useEffect, useCallback} from "react";

// 自定义hooks函数实现获取窗口尺寸
// useMemo 缓存变量 useCallback 缓存函数

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(()=> {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])
  useEffect(()=> {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []) // 离开当前页面执行副作用函数
  return size
}

function Example10() {
  const [sizeTest, setSizeText] = useState()
  const size = useWinSize() 
  return (
    <div>页面Size:{size.width}x{size.height}<br/>
      {sizeTest}
      <button onClick={()=>{setSizeText('这是测试数据变更,useEffect函数是否会执行')}}>更新数据</button>
    </div>
  )
}

export default Example10;

// useMemo(() => fn, deps)
// 返回一个值 deps参数值改变重新计算返回值。这种优化有助于避免在每次渲染时都进行高开销的计算。
// 请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
// 优化有助于避免在每次渲染时都进行高开销的计算。像vue的计算属性。




// useCallback(fn, deps)
// 返回一个回调函数, deps参数值改变它将返回该回调函数 该回调函数仅在某个依赖项改变时才会更新。

