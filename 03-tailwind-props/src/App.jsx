import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
//Here we are passing props to the Card component
  let myObj ={
    username: "Inayath",
    age:22
  }

  let newArray = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-sky-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* //Here we using the Card component and passing props to it */}
      {/* <Card  channel = "newChannel" someObj={myObj} /> */}
      
      <Card username = "Alexa" btnText = "Click me" />
      <br />
      {/* Here the btntxt we are not passing anything some we can default values to show also */}
      <Card username = "Siri" btnText ="Vist here" />
    </>
  )
}

export default App
