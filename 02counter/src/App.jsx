import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    if (counter >= 0 , counter <20){
      console.log("value added", counter);
      counter = counter + 1
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
