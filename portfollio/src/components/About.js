import React from "react";
import { FaGithub ,FaInstagram, FaTwitter, FaLinkedinIn, FaDribbble} from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
import { IoDesktop } from "react-icons/io5";
import my from '../components/Screenshot 2024-02-11 6.41.42 PM.png'
import { IoSchool } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
export default function About(){

    return (
        
            <div className=" max-w-[1240px] mx-auto h-auto my-2   md:grid grid-cols-3  gap-5 ">
                   
                    
                    
                    
                   
                    <div className=" h-[300px] md:col-span-1 hidden md:block rounded-3xl  ">
                    <img className=" h-full w-full mt-5  object-contain" src="https://cdn.vectorstock.com/i/preview-1x/10/09/medicine-chest-full-drugs-tablets-and-bottles-vector-30751009.webp"></img>
                    </div>

                    <div className=" h-auto col-span-2  flex flex-col pl-2 md:pl-8 md:rounded-3xl py-4 ">
                         <div className="pl-3">
                            <p className="  font-mono text-xl mt-2" >Skills</p>
                            </div> 
                            <div className="md:grid grid-cols-3 h-auto my-2 md:gap-4 space-y-2 md:space-y-0 pr-2 items-center justify-center">
                                <div className="h-auto bg-white col-span-1 pl-3 pt-5 cursor-move   ">
                                        <IoDesktop className=" text-3xl"></IoDesktop>
                                        <p className=" font-bold text-xl mt-2">Mern Stack</p>
                                        <p className=" font-mono text-sm mt-1 mr-2">Proficient in MERN stack development, with hands-on experience in building scalable and dynamic web applications.</p>
                                </div>
                                <div className="h-auto bg-white pb-2 col-span-1  pl-3 pt-5 cursor-move ">
                                <FaMobileRetro className=" text-3xl"></FaMobileRetro>
                                        <p className=" font-bold text-xl mt-2">React Native</p>
                                        <p className=" font-mono text-sm mt-1 mr-2">Skilled in React Native development, adept at crafting cross-platform mobile applications with efficiency and precision.</p>
                                </div>
                                <div className="h-auto bg-white col-span-1 pl-3 pt-5 cursor-move ">
                                <GiSkills className=" text-3xl"></GiSkills>
                                        <p className=" font-bold text-xl mt-2">Other</p>
                                        <p className=" font-mono text-sm mt-1 mr-2">Exceptional communicator with strong programming skills, adept at crafting elegant solutions to complex problems.</p>
                                </div>
                                </div>  
                    </div>
        </div>
    )
}