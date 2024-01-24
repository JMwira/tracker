import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from "../public/logo.svg"
import Ham from "../public/icon-hamburger.svg"
import Close from "../public/icon-close.svg"

function App() {
  const [istoggle, setistoggle] = useState(false)

  const Toggle = ()=>{
    setistoggle(!istoggle)
  }

  return (
    <div className='flex flex-col' >
      <div className='w-[50%] h-[500px] bg-c4  rounded-bl-[70px] fixed right-0 -z-0' ></div>
      <div className='lg:w-[85%] w-[90%] z-10 mx-auto py-10 flex items-center flex-row justify-between ' >
        <img src={Logo} alt="" className='size-10' />
        <div className='lg:hidden flex' >
          <img src={istoggle?Close:Ham} onClick={Toggle} alt="" />
        </div>
        <ul className='lg:flex hidden flex-row gap-4 uppercase text-xl font-semibold' >
          <li className='hover:underline cursor-pointer'>Product</li>
          <li className='hover:underline cursor-pointer'>Features</li>
          <li className='hover:underline cursor-pointer'>Pricing</li>
          <li className='hover:underline cursor-pointer hover:text-c3 text-c3'>Login</li>
        </ul>
      </div>
      {
        istoggle&&
        <div className='flex flex-col p-4 shadow-md relative top-0 w-[90%] mx-auto bg-white ' >
          <ul className='flex items-center text-center flex-col text-xl gap-3' >
            <li className='hover:underline cursor-pointer'>Product</li>
            <li className='hover:underline cursor-pointer'>Features</li>
            <li className='hover:underline cursor-pointer'>Pricing</li>
            <li className='hover:underline cursor-pointer hover:text-c3 text-c3'>Login</li>
          </ul>
        </div>
      }
      <div className='flex z-10 items-center lg:flex-row flex-col-reverse w-[100%] mx-auto py-[5%]' >
        <div className='flex lg:pl-[7%] pl-[5%] lg:w-1/2 w-full flex-col gap-5' >
          <span className='uppercase flex flex-row gap-3 items-center text-xl' >
            <span className='p-1 bg-black text-white font-bold rounded-full px-4' >New</span>
            <span className='font-extralight text-c3 ' >monograph dashboard</span>
          </span>
          <span className='font-extrabold uppercase lg:text-7xl text-5xl title ' >powerfull insights<br/>into your team</span>
          <span className='text-xl font-light text-c3' >Project planning and time tracking <br/> for agile teams</span>
          <div className='flex text-xl flex-row gap-3 uppercase items-center ' >
            <button className='uppercase font-bold text-white bg-c5 p-3 rounded-md ' >
              Schedule a demo
            </button>
            <span className='text-c3' >To see a preview</span>
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex flex-col lg:h-[600px] h-[500px] bg-no-repeat bg-bg lg:bg-cover' >
        </div>
      </div>
    </div>
  )
}

export default App
