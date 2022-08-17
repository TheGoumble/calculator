
export function NumClickHandler({e, calc, setCalc}){
    e.preventDefault()
    const value = e.target.innerHTML

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      })
    }
  }

export function DecimalClickHandler(e, calc, setCalc){
    e.preventDefault()
    const value = e.target.innerHMTL
    
    setCalc({
        ...calc,
        num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    })
}

export function SignClickHandler(e, calc, setCalc){
    e.preventDefault()
    const value = e.target.innerHtml

    setCalc({
        ...calc,
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0
    })
}

export function EqualsClickHandler(calc, setCalc){
    if(calc.sign && calc.num){
        const math = (a, b, sign) => 
        sign === "+" ? a + b :
        sign === "-" ? a - b :
        sign === "X" ? a * b : 
        //else
        a / b

        setCalc({
            ...calc, 
            res: calc.num === "0" && calc.sign === "/" ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
            sign: "", 
            num: 0
        })
    }
}

export function InvertClickHandler(calc, setCalc){
    setCalc({
        ...calc,
        num: calc.num ? calc.num * -1 : 0,
        res: calc.res ? calc.res * -1 : 0,
        sign: ""
    })
}


export function PercentClickHandler(calc, setCalc){
    let num = calc.num ? parseFloat(calc.num) : 0
    let res = calc.res ? parseFloat(calc.res) : 0

    setCalc({
        ...calc,
        num: (num /= Math.pow(100, 1)),
        res: (res /= Math.pow(100, 1)),
        sign: ""
    })
}

export function ResetClickHandler(e, calc, setCalc){
    setCalc({
        ...calc,
        sign: "",
        num: 0,
        res: 0
    })
}
