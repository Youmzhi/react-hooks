import React, {useRef, useState, useEffect} from "react";
function Example9() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = 'Hello Word'
    console.log(inputEl)
  }
  const [text, setText] = useState('Hello word!!')
  const textRef = useRef()
  useEffect(()=> {
    textRef.current = text  // useRef 保存普通变量
    console.log('textRef.current:', textRef.current)
  })
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input展示文字</button>
      <br/>
      <br/>
      <input value={text} onChange={(e)=> {setText(e.target.value)}}></input>
    </>
  )
}

export default Example9;