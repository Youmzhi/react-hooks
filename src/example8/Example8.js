import React, {useState, useMemo} from "react";
// useMemo解决性能问题 父组件执行禁止子组件执行函数
function Example8() {

  const [indexPage, setIndexPage ] = useState('首页来了')
  const [listPage, setListPage ] = useState('列表页来了')

  return (
    <>
      <button onClick={()=>{setIndexPage(new Date().getTime())}}>index page</button>
      <button onClick={()=>{setListPage(new Date().getTime())}}>list page</button>
      <ChildComponent name={indexPage}>{listPage}</ChildComponent>
    </>
  )
}


function ChildComponent({name, children}) {

  function changePage(name) {
    console.log('父组件更新, 子组件执行函数')
    return name + '这是页面'
  }

  const actionPage = useMemo(()=> changePage(name), [ name ]) // name变更执行changePage函数

  return (
    <>
      <div>{actionPage}</div>
      <div>{children}</div>
    </>
  )
}

export default Example8;