import React from "react";

export default function Header(){

    return(
<div className=' bg-white'>

<div className=' w-full h-14 bg-slate-200 flex items-center justify-between px-4 md:px-7 '>
  <div className=' text-2xl font-bold text-indigo-700'>My Practice</div>
  <ul className=' md:flex hidden font-semibold'>
    <li className=' mx-[10px] cursor-pointer'>Home</li>
    <li className=' mx-[10px] cursor-pointer'>About</li>
    <li className=' mx-[10px] cursor-pointer'>Contact Us</li>
  </ul>
  <div className=' bg-indigo-900 font-mono rounded-lg p-2 text-white cursor-pointer md:block hidden'>Login/SignUP</div>
</div>




<div className=' w-full h-auto'>
  <img className='md:block hidden md:w-full' src="https://main.assets.gameloft.com/assets/home/hotspot/DDV/DDV_23262_S_Expansion1KeyArt_A_03_OFF02_FB_LS_1920x931_EN_1920x1080.jpg"></img>
<img className=' md:hidden w-full' src='https://main.assets.gameloft.com/assets/home/hotspot/DDV/DDV-Keyart-412.jpg'></img>
</div>




<div className=' w-full flex flex-col items-center h-auto text-center p-10'>
      <div className=' w-full flex flex-col items-center h-auto'>
        <p className=' font-mono text-3xl font-bold'>"Pure Hardwork, no Shortcuts"</p>
        <div className=' border-b-4 border-red-500 h-1 w-36 mt-2 md:mt-4 rounded-2xl'></div>
      </div>

        <div className=' w-full flex flex-wrap justify-evenly mt-4 '>
          <div className=' w-[400px] h-[400px] flex flex-col items-center text-right'>
            <img className=' w-[300px] h-[300px] mb-2' src='https://img.freepik.com/free-psd/realistic-books-illustration_23-2150583553.jpg?w=740&t=st=1706992131~exp=1706992731~hmac=e6a8f9887d0b6f3e26df6528d2b76228bf57215019aef63191501cab4a21e72b'></img>
            <p className=' font-extrabold text-red-700 text-3xl'>600+</p>
            <p className=' font-medium text-3xl text-gray-500'>Different Courses</p>
          </div>
          <div className=' w-[400px] h-[400px]  flex flex-col items-center text-right'>
            <img className=' w-[300px] h-[300px] mb-2' src='https://img.freepik.com/free-psd/realistic-books-illustration_23-2150583553.jpg?w=740&t=st=1706992131~exp=1706992731~hmac=e6a8f9887d0b6f3e26df6528d2b76228bf57215019aef63191501cab4a21e72b'></img>
            <p className=' font-extrabold text-red-700 text-3xl'>600+</p>
            <p className=' font-medium text-3xl text-gray-500'>Different Courses</p>
          </div>
          <div className=' w-[300px] h-[300px] flex flex-col items-center text-right'>
            <img className=' w-full h-full mb-2' src='https://img.freepik.com/free-psd/realistic-books-illustration_23-2150583553.jpg?w=740&t=st=1706992131~exp=1706992731~hmac=e6a8f9887d0b6f3e26df6528d2b76228bf57215019aef63191501cab4a21e72b'></img>
            <p className=' font-extrabold text-red-700 text-3xl'>600+</p>
            <p className=' font-medium text-3xl text-gray-500'>Different Courses</p>
          </div>
        </div>
</div>
</div>
    )
    
}