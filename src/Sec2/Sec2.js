import React from 'react';
import "../Sec2/Sec2.css";
import {FaLink} from "react-icons/fa/";
import {CgMail} from 'react-icons/cg';
import {CiLocationOn} from "react-icons/ci"


const Sec2 = () => {
  return (
    <div className='main-sec2'>
    <div className='para'>
    <p>Minim modi yet omnis nor quia so minima</p>
    </div>
      <div className='link1'>
      <span><FaLink/>Ipsum Lorem</span>
      </div>
      <div className='link2'>
      <span><CgMail/>Ipsum Lorem</span>
      </div>
      <div className='link3'>
      <span><CiLocationOn/>Ipsum Lorem</span>
      </div>
    </div>
  )
}

export default Sec2;