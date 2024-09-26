import React, { useState } from 'react'
import "./firstp.scss"
import "../Img/favicon.png"
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";


function Firstpage() {
  const [dark,setdark]=useState(true)
  function darkmode(){setdark(!dark)}
  return (
    <>
        <div className="mainNav">
          <div className='fy'></div>
          <div className='sy'></div>

          <div className='ty'>  
          <span style={{height:'25px',width:'25px',background:'#00ff7b'}}>3</span>
          <FiShoppingCart/>
          <span onClick={darkmode}>{dark ? <LuMoon />:<MdOutlineLightMode /> }</span>
          <CgProfile />


          </div>

        </div>
        <div className="all"></div>
    </>
  )
}

export default Firstpage
