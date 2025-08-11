import { useCallback, useState ,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if( numberAllowed) str += "0123456789"
      if( charAllowed) str += "!@#$%^&*(){}:''?<>|"

      for( let i = 1 ; i < length; i++){
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char)
      }

      setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyToClip = useCallback(()=>{   
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed,charAllowed,passwordGenerator ])
  return (
    <>
      <div className= "w-fit  mx-auto rounded-4xl px-7 py-7 shadow-md text-white text-2xl bg-gray-400"> Password Generator
      <div className= "flex shadow-md bg-gray-500 rounded-xl overflow-hidden mt-5">
        <input 
          type="text" 
          value={password}
          className='outline-none'
          placeholder='Password'
          readOnly
          ref={passRef}
        />
        <button onClick={copyToClip}>Copy</button>
        </div>
        <div>
          <div>
            <input 
            type="range"
            min={6}
            max={20} 
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            
            />
            <label>length : {length}</label>
          </div>
          <div>
            <input className="scale-150 m"
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="NumberChecked"
              onChange={ () => { setNumberAllowed((prev) => !prev)}}
              />
              <label className='ml-6' >Required Number</label>
          </div>
          <div>
            <input className="scale-150 m"
              type="checkbox" 
              id="CharacterChecked"
              defaultChecked={charAllowed}
              onChange={ () => { setCharAllowed( (prev) => !prev ) }}
             />
             <label className='ml-6'>Required Character</label>
             <div className= "mt-5">
              <button onClick={ () => passwordGenerator()}> Refresh Password</button>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
