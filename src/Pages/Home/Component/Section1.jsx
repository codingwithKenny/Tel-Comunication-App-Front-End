import React, { useState } from 'react'
import "./Section1.css"
import { useTranslation } from 'react-i18next';

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='section1container'>
        <div className='sectionLeft'>
            <h1>{t('DO IT SWIFTLY WITH SWIFTPAY')}</h1>
            <hr />
            <p>We are a telecommunication company that provide voice or data transmission services, such as; Mobile Data And Airtime (VTU) .</p>
            <button>Login</button>
            <button>Register</button>
        </div>
        <div className='section1Right'>
            <p>
            <div> <img src="./swiftlogo.jpg" alt=""  className=' swiftimg'/>
              <img src="timage.png" alt="" className='timage'/></div>
            </p>
        </div>
       
    </div>
     <div className='threebtn'>
     <button>BUY DATA</button>
     <button>FUND WALLET</button>
     <button>BUY AIRTIME</button>
   </div>
 
    </div>
  )
}

export default Section1
