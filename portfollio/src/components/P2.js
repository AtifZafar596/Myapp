import React from "react";
import logo from '../components/pixlr-image-generator-0f106ad9-d97a-4ef7-ab35-1269af09c6e8.png'
import logo2 from '../components/114e4f2e9bc8c445213e504231ffb79ca627d84f-1440x835.webp'

import { GoArrowUpRight } from "react-icons/go";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
export default function P2(){
return(
    <div className=" max-w-[1240px] md:h-[400px]  md:grid grid-cols-2 mx-auto gap-3">
        <div className=" col-span-1  bg-gray-white pt-4 pl-3 md:rounded-2xl rounded-md h-[300px] md:h-auto mx-2  cursor-pointer overflow-hidden ">
            <div className=" w-[80%]  h-[20%]  float-left ">
                <p className=" text-black font-semibold text-lg">Flop App</p>
                <p className=" text-black font-thin opacity-80 text-lg">Social media for poker players</p>
            </div>
            <div className=" w-[20%]   float-left h-[60px]  flex justify-center items-center" >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <GoArrowUpRight className=" text-white w-6 h-6"></GoArrowUpRight>
                </div>
            </div>
            <div className=" h-[80%] w-[90%]transform hover:scale-105 transition-transform ">
                <img className=" h-full w-full object-contain " src={logo}></img>
            </div>
        </div>
        <div className=" col-span-1  pt-4 pl-3 md:rounded-2xl  rounded-md h-[300px] md:h-auto mx-2 mt-2 md:mt-0  cursor-pointer overflow-hidden ">
            <div className=" w-[80%] h-[20%]  float-left ">
                <p className=" text-black font-semibold text-lg">Flop App</p>
                <p className=" text-black font-thin opacity-80 text-lg">Social media for poker players</p>
            </div>
            <div className=" w-[20%]   float-left h-[60px]  flex justify-center items-center" >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <GoArrowUpRight className=" text-white w-6 h-6"></GoArrowUpRight>
                </div>
            </div>
            <div className=" h-[80%] w-[90%]transform hover:scale-105 transition-transform py-2 ">
                <img className=" h-full w-full object-contain " src={logo2}></img>
            </div>
        </div>
        
    </div>
)

}