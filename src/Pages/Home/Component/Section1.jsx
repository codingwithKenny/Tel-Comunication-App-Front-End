import React, { useState } from 'react'
import "./Section1.css"

const Section1 = () => {

  return (
    <div>
      <div className='section1container'>
        <div className='sectionLeft'>
            <h1>WELCOME TO ROY</h1>
            <hr />
            <p>We are a telecommunication company that provide voice or data transmission services, such as; Mobile Data And Airtime (VTU) .</p>
            <button>Login</button>
            <button>Register</button>
        </div>
        <div className='section1Right'>
            <p>
              <img src="https://res.cloudinary.com/termii-inc/image/upload/v1673519418/termii-new-website/landing-page/telcos_te3rqz.png" alt="" />
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
