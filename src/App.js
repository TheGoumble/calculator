import React, { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import ButtonBox from "./components/ButtonBox"
import Screen from "./components/Screen"
import Wrapper from "./components/Wrapper"
import CalcProvider from "./context/CalcContext"

const btnVal = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]

const App = () => {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnVal.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}

export default App
