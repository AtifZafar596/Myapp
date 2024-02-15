import React from "react";
import { FaGithub ,FaInstagram, FaTwitter, FaLinkedinIn,FaDribbble} from "react-icons/fa";
export default function Contact(){
    const openEmail = () => {
        const emailAddress = 'atifzafar596@gmail.com'; // Replace with your email address
        const subject = 'Hello'; // Optional: Set the subject of the email
        const body = 'Enter your message here'; // Optional: Set the body of the email
    
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.open(mailtoLink);
      };
    return(
        <diV className=" max-w-[1240px] mx-auto h-[320px] pt-10  my-2 bg-gradient-to-r from-white to-[rgb(117,88,79)]">
           <p className=" font-extrabold text-[34px] mx-[40px] ">Want to work together?</p>
           <p className=" mx-[40px] mr-4">Feel free to reach out for collaborations or just a friendly hello</p>
           <p onClick={openEmail} className=" mx-[40px] mr-4 mt-2 font-mono cursor-pointer">atifzafar596@gmail.com</p>
           <div className=" flex md:gap-4   mt-2 gap-1 mx-[40px]  " >
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
        </diV>
    )
}