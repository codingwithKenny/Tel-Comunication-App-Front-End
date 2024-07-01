import React from 'react'
import "./FourthSection.css"
import { Link } from 'react-router-dom'


const FourthSection = () => {

  return (
   <div>
     <div className='whatRoyDO'>
        <div className='eachBox' >
            <Link to={'/dashboard/buydata'}>
            <img src="/data.png" alt="" />
            <p>Buy Data</p>
            </Link>
            
        </div>
        <div className='eachBox' >
            <img src="2.png" alt="" />
            <p>Funds</p>
        </div>
        <div className='eachBox' >
            <img src="/3.png" alt="" />
            <p>Bulk sms</p>
        </div>
        <div className='eachBox' >
           <Link to={'/dashboard/electricity'}>
           <img src="5.png" alt="" />
            <p>Buy Electricty</p>
           </Link>
        </div>
       
      
    </div>
    <div className='whatRoyDO'>
        <div className='eachBox' >
            <Link to={"/dashboard/cable"}>
            <img src="4.png" alt="" />
            <p>cable TV</p>
            </Link>
        </div>
        <div className='eachBox' >
            <Link to={'/dashboard/buyairtime'}> <img src="7.png" alt="" />
            <p>Network</p></Link>
           
        </div>
        <div className='eachBox' >
            <img src="6.png" alt="" />
            <p>AirTime</p>
        </div>
        <div className='eachBox' >
            <img src="1.png" alt="" />
            <p>Result Checker</p>
        </div>
       
      
    </div>
   </div>
  )
}

export default FourthSection
