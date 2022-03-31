import React from "react";
import Buttons from "./Buttons";
import ShowArea from "./showArea";
import { Color } from './color'

function Example7() {
  return (
    <div>
      <Color>
        <ShowArea></ShowArea>
        <Buttons></Buttons>
      </Color>
    </div>
  )
}

export default Example7