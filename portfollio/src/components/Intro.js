import React from "react";
import my from '../components/my1.jpeg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { FaGithub ,FaInstagram, FaTwitter, FaLinkedinIn, FaDribbble} from "react-icons/fa";
export default function Intro(){
 
    const openEmail = () => {
        const emailAddress = 'atifzafar596@gmail.com'; // Replace with your email address
        const subject = 'Hello'; // Optional: Set the subject of the email
        const body = 'Enter your message here'; // Optional: Set the body of the email
    
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.open(mailtoLink);
      };
    return(
        <div className=" max-w-[1240px] mx-auto h-auto my-2   md:grid grid-cols-3  gap-5 ">
                    <div className=" h-auto col-span-2  flex flex-col justify-evenly items-center bg-gradient-to-r from-white to-[rgb(117,88,79)] md:rounded-3xl py-4 ">
                        <p className=" font-extrabold text-[34px] mx-[20px] mr-4 md:mr-32 ">Hello, I'm ATIF, a Full Stack Developer With 2 years of experience.</p>
                        <p className=" mx-[20px] md:mr-12 mr-4">I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>
                        <div className=" md:flex gap-2 items-center justify-center">
                            <button onClick={openEmail} className=" bg-black md:px-8 w-full md:w-auto rounded-xl  py-3 md:rounded-3xl mt-2 md:mt-0 text-white font-semibold "> Contact me</button>
                            <div className=" flex md:gap-4   mt-2 gap-1 justify-center items-center  " >
                            <div className="w-10 h-10 bg-white hover:bg-slate-500 cursor-pointer  rounded-full flex items-center justify-center">
                <FaGithub onClick={()=>window.open("https://github.com/AtifZafar596",'_blank')} className=" text-black w-5 h-5 hover:text-white"></FaGithub>
                </div>

                <div className="w-10 h-10 bg-white hover:bg-red-800 cursor-pointer  rounded-full flex items-center justify-center">
                <FaInstagram onClick={()=>window.open("https://www.instagram.com/_atipeu_/",'_blank')} className=" text-black w-5 h-5 hover:text-white"></FaInstagram>
                </div>

                <div className="w-10 h-10 bg-white hover:bg-blue-700 cursor-pointer  rounded-full flex items-center justify-center">
                <FaDribbble onClick={()=>window.open("https://dribbble.com/atif_zafar",'_blank')}  className=" text-black w-5 h-5 hover:text-white"></FaDribbble>
                </div>

                <div className="w-10 h-10 bg-white hover:bg-yellow-500 cursor-pointer  rounded-full flex items-center justify-center">
                <FaLinkedinIn onClick={()=>window.open("https://www.linkedin.com/in/atif-zafar-3644a0271/",'_blank')} className=" text-black w-5 h-5 hover:text-white"></FaLinkedinIn>
                </div>
                             </div>
                        </div>
                    </div>
                    <div className=" h-[400px] col-span-1 bg-transparent rounded-3xl ">
                    <img className=" h-full w-full object-cover" src={my}></img>
                    </div>
        </div>
    )
}