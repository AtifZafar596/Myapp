import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
export default function Navbar(){
         const [toggle,setToggle]=useState(false)
    return(
        <div className=' bg-transparent p-4'>
                <div className=' max-w-[1240px] items-center  mx-auto flex justify-between'>
                 <div className='flex gap-2'>
                    <div className=' bg-yellow-500 rounded-full h-6 w-6'></div>
                    <p className=' uppercase font-medium'>Atif</p>
                 </div>
                    {
                        toggle ?
                        <AiOutlineClose onClick={()=>setToggle(!toggle)} className=' duration-700 md:hidden block size-6'></AiOutlineClose>
                        :
                        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className=' duration-1000 md:hidden block size-6'></AiOutlineMenu>
                    }
                 
                 <ul className='hidden md:flex gap-8'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                 </ul>

                 {/* Below is responsive menu*/}
                 <ul className={` duration-300 md:hidden fixed  bg-slate-100 top-[55px] w-full h-screen font-thin 
                 
                  ${toggle ? ' right-0' : 'right-[-100%]'}
                 
                 `} >
                    <li className=' p-3 ml-2'>Home</li>
                    <li className=' p-3 ml-2'>Projects</li>
                    <li className='p-3 ml-2'>Contact</li>
                 </ul>
                </div>
        </div>
    )
}