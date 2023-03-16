import React, { useContext } from "react"
import { CalcContext }from "../../context/CalcContext"
import "./screen.css"

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return (
    <div id="screen">
     {calc.num ? calc.num : calc.res}
    </div>
  )
}

export default Screen
