import React,{useState} from "react";
import logo from '../components/preview-05.png'
import logo2 from '../components/preview-07.png'
import { FaGithub ,FaInstagram, FaTwitter, FaLinkedinIn,FaDribbble} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Document, Page } from 'react-pdf';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { pdfjs } from 'react-pdf';
import PdfComp from "./PdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
export default function Projects(){

    

    const [isOpen, setIsOpen] = useState(false);

  const openAlert = () => {
    setIsOpen(true);
  };

  const closeAlert = () => {
    setIsOpen(false);
  };

  const viewPDF = () => {
    alert('View PDF clicked');
    
    closeAlert();
  };

  const openLiveServer = () => {
    alert('Open Live Server clicked');
    closeAlert();
  };
  
  
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
            <div className=" h-[80%] w-[90%]transform hover:scale-105 relative transition-transform ">
                <img className=" h-full w-full object-contain " src={logo}></img>
               
            </div>
          
        </div>
        <div onClick={openAlert}  className=" col-span-1  pt-4 pl-3 md:rounded-2xl  rounded-md h-[300px] md:h-auto mx-2 mt-2 md:mt-0  cursor-pointer overflow-hidden ">
            <div className=" w-[80%] h-[20%]  float-left ">
                <p className=" text-black font-semibold text-lg">Flop App</p>
                <p className=" text-black font-thin opacity-80 text-lg">Social media for poker players</p>
            </div>
            <div  className=" w-[20%]   float-left h-[60px]  flex justify-center items-center" >
            <div  className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <GoArrowUpRight  className=" text-white w-6 h-6"></GoArrowUpRight>
                </div>
               
            </div>
            {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center" onClick={closeAlert}>
          <div className="bg-white w-11/12 sm:w-1/3 p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4">Choose an option:</div>
            <div className="flex flex-col sm:flex-row justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2" onClick={viewPDF}>View PDF</button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2" onClick={openLiveServer}>Open Live Server</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeAlert}>Cancel</button>
            </div>
          </div>
        </div>
      )}
            <div className=" h-[80%] w-[90%]transform hover:scale-105 transition-transform py-2 ">
                <img className=" h-full w-full object-contain " src={logo2}></img>
            </div>
        </div>
      
    </div>
)

}