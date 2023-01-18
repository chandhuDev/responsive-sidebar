
import { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import {AiOutlineHome} from 'react-icons/ai'
import logo from '../src/assets/apple-touch-icon.png'




function App() {
     
     const itemArray=[
      {
       logo1:logo,
       value:'Home'
      },
      {
        logo1:logo,
        value:'Upload'
       },
       {
        logo1:logo,
        value:'Analytics'
       },
       {
        logo1:logo,
        value:'Messages'
       },
       {
        logo1:logo,
        value:'Content'
       },
       {
        logo1:logo,
        value:'Billing'
       },
       {
        logo1:logo,
        value:'History'
       },
       {
        logo1:logo,
        value:'settings'
       },
       {
        logo1:logo,
        value:'Sign-Out'
       },
      
    
        ]




     const [menuOpen,setMenuOpen]=useState(false)



  return (
    <>
     <div className="flex ">
        <div className={`${menuOpen ? 'w-56' : 'w-20' } duration-300  h-screen bg-blue-900 text-white relative p-3`}>
          <FiArrowRightCircle  className={`w-8 h-8 absolute -right-4 top-8  ${!menuOpen&& 'rotate-180'} ${menuOpen?'w-8 h-8':'w-8 h-8'}`} onClick={()=>{setMenuOpen(!menuOpen)}}/>
          <img className={`w-10 h-10 mt-2  rounded-lg ${!menuOpen&&'rotate-[180]'}`} src={logo} alt="icon"/>
           <ul className={`pt-3  `}>
           {itemArray.map((item,index)=>{
            return (
              <li key={index} className={`flex gap-x-3 px-3 items-center py-2 hover:bg-slate-400 cursor-pointer  rounded-lg`}>
                <img src={logo} alt='itemValue' className="h-6 w-6 "></img>
                <span className={`text-lg   font-medium ${!menuOpen&&'hidden'} `}>{item.value}</span>
              </li>
            )
           })}
            </ul>


            <div className="flex gap-x-2 absolute bottom-5 items-center text-center">
              <img src={logo} alt='userImage' className='h-8 w-8 '/>
              <h4 className={`text-xl font-semibold ${!menuOpen&&'hidden'} text-justify`}>chandrasekhar mamidi</h4>
            </div>
        </div>

        <h2 className="p-7 text-xl font-semibold flex-1 h-screen bg-neutral-50">Main Page</h2>
     </div>
    </>
  );
}

export default App;
