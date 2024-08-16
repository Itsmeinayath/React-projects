import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [specialCharacters, setSpecialCharacters] = useState(false)
  const [password, setPassword] = useState('')
  // ref hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (specialCharacters) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbers, specialCharacters, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99999)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(() => {
  passwordGenerator()
},[length, numbers, specialCharacters, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 my-8 bg-gray-800 text-orange-500">
        <h2 className="text-2xl font-semibold text-center mb-6">Password Generator</h2>
        <div className="flex items-center shadow-inner rounded-lg overflow-hidden mb-4 bg-gray-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-4 py-3 bg-gray-700 text-orange-500"
            placeholder="Your Password"
            readOnly
            ref={passwordRef}
          />
          <button  
          onClick={copyPasswordToClipboard}
          className="ml-2 outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg focus:outline-none transition-colors duration-300">
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-x-3'>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-3'>
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(prev => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-3'>
            <input
              type="checkbox"
              checked={specialCharacters}
              onChange={() => setSpecialCharacters(prev => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white m-1 py-3 rounded-lg focus:outline-none transition-colors duration-300"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
