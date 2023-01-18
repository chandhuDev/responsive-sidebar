
import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

import {BiHomeAlt} from 'react-icons/bi'
import {MdOutlineCloudUpload} from 'react-icons/md'
import {MdOutlineAnalytics} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {HiOutlineVideoCamera} from 'react-icons/hi'
import {BsCurrencyDollar} from 'react-icons/bs'
import {MdHistory} from 'react-icons/md'
import {IoSettingsOutline} from 'react-icons/io5'
import {FaSignOutAlt} from 'react-icons/fa'
import logo from '../src/assets/apple-touch-icon.png'




function App() {
     
     const itemArray=[
      {
       logo1:BiHomeAlt,
       value:'Home'
      },
      {
        logo1:MdOutlineCloudUpload,
        value:'Upload'
       },
       {
        logo1:MdOutlineAnalytics,
        value:'Analytics'
       },
       {
        logo1:BiMessageSquareDetail,
        value:'Messages'
       },
       {
        logo1:HiOutlineVideoCamera,
        value:'Content'
       },
       {
        logo1:BsCurrencyDollar,
        value:'Billing'
       },
       {
        logo1:MdHistory,
        value:'History'
       },
       {
        logo1:IoSettingsOutline,
        value:'Settings'
       },
       {
        logo1:FaSignOutAlt,
        value:'Sign Out'
       },
      
    
        ]




     const [menuOpen,setMenuOpen]=useState(true)



  return (
    <>
     <div className="flex ">
        <div className={`${menuOpen ? 'w-56' : 'w-20' } duration-300  h-screen bg-blue-900 text-gray-100 relative p-3`}>
          <FiArrowRightCircle  className={`w-8 h-8 absolute -right-4 top-6  ${!menuOpen&& 'rotate-180'} `} onClick={()=>{setMenuOpen(!menuOpen)}}/>
          <img className={`w-10 h-10 mt-2  rounded-lg ${!menuOpen&&'rotate-[180]'}`} src={logo} alt="icon"/>
           <ul className={`pt-3  `}>
           {itemArray.map((item,index)=>{
            return (
              <li key={index} className={`flex gap-x-3 px-3 items-center py-2 hover:bg-slate-400 cursor-pointer group rounded-lg`}>
                
                <div className={`${!menuOpen&&'hover:scale-150 duration-150'}`}>{React.createElement(item?.logo1,{size:"20"})}</div>
                
                <h6   className={`text-lg  font-medium   whitespace-pre duration-500  ${!menuOpen&&'translate-x-48 opacity-0   overflow-hidden'}  `}>{item?.value}</h6>
                <h6   className={` ${menuOpen&&'hidden'} text-gray-900  rounded-md font-medium text-lg translate-x-32 group-hover:duration-500 group-hover:bg-gray-100 group-hover:px-2 group-hover:py-1 group-hover:translate-x-6  w-0 overflow-hidden whitespace-nowrap  group-hover:w-fit group-hover:overflow-visible`}>{item?.value}</h6>
                
              </li>
            )
           })}
            </ul>


            <div className="flex gap-x-2 absolute bottom-5 items-center text-center">
              <img src={logo} alt='userImage' className='h-8 w-8 '/>
              <div className={`text-xl font-semibold ${!menuOpen&&'hidden'} text-center`}>chandrasekhar mamidi</div>
            </div>
        </div>

        <h2 className="p-7 text-xl font-semibold flex-1 h-screen bg-neutral-50">Main Page</h2>
     </div>
    </>
  );
}

export default App;
