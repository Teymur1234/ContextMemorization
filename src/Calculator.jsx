import React, { useContext } from 'react'
import styles from './button.module.css'
import inputs from './input.module.css'
import './calculator.css'
import Calculatorcontex from './contexts/Calculatorcontex'
const Calculator = () => {
    const {input1,input2,result,handleInput1Change,handleInput2Change,handleMultiply,handleDivide,handleAdd,handleSubtract}=useContext(Calculatorcontex)
  return (
    <div>
          <input type="number" placeholder="Enter first number" className={inputs.input} value={input1}  onChange={handleInput1Change}/>
        <input type="number" placeholder="Enter second number" className={inputs.input} value={input2}  onChange={handleInput2Change}/>
        <p>{result}</p>
        <button className={styles.button} onClick={handleMultiply}>*</button>
        <button className={styles.button} onClick={handleDivide}>/</button>
        <button className={styles.button} onClick={handleAdd}>+</button>
        <button className={styles.button} onClick={handleSubtract}>-</button>
    </div>
  )
}

export default Calculator