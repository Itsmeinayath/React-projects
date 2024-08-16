// Here hook is used to create a state variable and a function to update the state variable.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Here useState is a hook which is used to create a state variable and a function to update the state variable.
  // Here counter is a state variable and setCounter is a function to update the state variable.
  let [counter,setCounter] = useState(0)

  // let counter = 0

  const addValue = () =>{
    // console.log('Value Added',counter)
    // counter =  counter + 1
    // setCounter(counter + 1)
    if(counter <= 9){
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
    }
    else{
      setCounter(0)
    }


  }
  const removeValue = () =>{
    // setCounter(counter - 1)
    if(counter > 0){
      setCounter(counter - 1)
    }
      else{
        setCounter(0)
      }
  }

  return (
    <>
      <h1>Inayath on React</h1>
      <h2>Counter Value:{counter} </h2>
      <button onClick={addValue} > Add Value {counter} </button> <br />
     <br /> <button onClick={removeValue}>Remove Value {counter} </button>
      {/* <p>footer:{counter}</p> */}
    </>
  )
}

export default App
