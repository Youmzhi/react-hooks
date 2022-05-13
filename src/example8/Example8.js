import React, {useState, useMemo} from "react";
// useMemo解决性能问题 父组件执行禁止子组件执行函数
function Example8() {

  const [indexPage, setIndexPage ] = useState('小红待客')
  const [listPage, setListPage ] = useState('志玲待客')

  return (
    <>
      <button onClick={()=>{setIndexPage(new Date().getTime())}}>小红</button>
      <button onClick={()=>{setListPage(new Date().getTime() + ',志玲向我们走来了')}}>志玲</button>
      <ChildComponent name={indexPage}>{listPage}</ChildComponent>
    </>
  )
}


function ChildComponent({name, children}) {

  function changePage(name) {
    console.log('她来了, 小红向我们走来了')
    return name + '小红向我们走来了'
  }

  // const actionPage = changePage(name)
  const actionPage = useMemo(()=> changePage(name), [ name ]) // name变更执行changePage函数

  return (
    <>
      <div>{actionPage}</div>
      <div>{children}</div>
    </>
  )
}

export default Example8;