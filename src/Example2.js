import React, {useState} from 'react'
function Example2() {
  // 声明多个状态
  const [age, setAge] = useState(24)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端工程师')
  return (
    <div>
      <p>年龄：{age}</p>
      <p>性别：{sex}</p>
      <p>工作：{work}</p>
    </div>
  )
}

export default Example2

