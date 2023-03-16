import React, { useContext } from "react"
import { CalcContext } from "../../context/CalcContext"
import "./button.css"

const styleBtn = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt"
  }
  return className[btn]
}

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext)

  // For the use of comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    })
  }

  // For the use of Clear
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 })
  }

  // for click number
  const handleClick = () => {
    const numberString = value.toString()

    let numberValue

    if (numberString === "0" && calc.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue,
    })
  }

  //for click operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  //for click equals
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        }
        return result[sign](a, b)
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      })
    }
  }

  // for persent
  const persentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ""
    })
  }

  // for invert 
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.num ? calc.num * -1 : 0,
      sign: ""
    })
  }

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      "%": persentClick,
      "+-": invertClick
    }
    if (results[value]) {
      return results[value]()
    } else {
      return handleClick()
    }
  
  }
  return (
    <button onClick={handleBtnClick} className={`${styleBtn(value)} btn`}>
      {value}
    </button>
  )
}

export default Button
