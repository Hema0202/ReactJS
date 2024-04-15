import { useState } from 'react'

import './App.css'

function App() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [product, setProduct] = useState(1);
  
  function increase(){
    setIncrement(prevCount => prevCount + 1);
  }

  function decrease(){
    setDecrement(prevCount => prevCount - 1);
  }

  function multiply(){
    setProduct(prevCount => prevCount * 2);
   }
  return (
    <>
      <div>For increment click here</div>
      <button onClick={increase}>{increment}</button><br></br><br></br>
      <div>For decrement click here</div>
      <button onClick={decrease}>{decrement}</button><br></br><br></br>
      <div>For multiplication click here</div>
      <button onClick={multiply}>{product}</button>
    </>
  )
}

export default App
