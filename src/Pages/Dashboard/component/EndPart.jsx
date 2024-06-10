import React from 'react'
import "./EndPart.css"

const EndPart = () => {
  return (
     <div className='footercontainer'>
      <div className='footer'>
        <p>We are a telecommunication company that provide voice or data transmission services, such as; Mobile Data And Airtime (VTU) .</p>
        <ul>
            <li>company</li>
            <li>Home</li>
            <li>Feature</li>
            <li>About</li>
            <li>Service</li>
            <li>Price</li>
            <li>Testimonial</li>
        </ul>
        <ul>
            <li>Support</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Feedback</li>
            
        </ul>
      
      </div>
             <div className='footeradress'>
             <a href=""><i class="fa-solid fa-message"></i> : INFO@ROYTECHATGMAIL.COM</a>
             <a href=""><i class="fa-solid fa-phone"></i> : +234-8106114218</a>
             </div>
     </div>
  )
}

export default EndPart
