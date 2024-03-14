const { createContext, useState } = require("react");


const Calculatorcontex=createContext()

export const CalculatorProvider=({children})=>{

    const [input1,setInput1]=useState('')
    const [input2,setInput2]=useState('')
    const [result,setResult]=useState('')
    const handleInput1Change = (e) => {
      setInput1(e.target.value);
    };
  
    const handleInput2Change = (e) => {
      setInput2(e.target.value);
    };
    const handleMultiply = () => {
      setResult(parseFloat(input1) * parseFloat(input2));
      setInput1('')
      setInput2('')
    };
  
    const handleDivide = () => {
      setResult(parseFloat(input1) / parseFloat(input2));
      setInput1('')
      setInput2('')
    };
  
    const handleAdd = () => {
      setResult(parseFloat(input1) + parseFloat(input2));
      setInput1('')
      setInput2('')
    };
  
    const handleSubtract = () => {
      setResult(parseFloat(input1) - parseFloat(input2));
      setInput1('')
      setInput2('')
    };
        
    

    return(
        <Calculatorcontex.Provider value={{input1,input2,result,handleInput1Change,handleInput2Change,handleMultiply,handleDivide,handleAdd,handleSubtract}}>
            {children}
        </Calculatorcontex.Provider>
    )
}

export default Calculatorcontex