
import React from 'react'
import "./Card.css"

const Card = () => {
  return (
   <div>
    <div className='toptext'>
        <h1 className='text'>WHAT WE OFFER</h1><hr/>
        <div className='service'>
        <a href="">Our Service</a>
        <a href="">View All</a>
        </div>
    </div>
     <div className='card'>
        <div className='card1'>
            <img src="https://dancitysub.com/static/styling/img/data.jpg" alt="" />
           <div className='carddetails'>
           <h1>Buy Data Bundle</h1><hr/>
            <p>Start enjoying this very low rates for your internet browsing databundle</p>
            <button>BUY NOW</button>
           </div>
        </div>
        <div className='card1'>
            
            <img src="https://dancitysub.com/static/dashboard/assets/img/airtime.svg" alt="" />
            <h1>Buy Airtime</h1><hr/>
            <p>Start enjoying this very low rates for your internet browsing databundle</p>
            <button>BUY NOW</button>
        </div>
        <div className='card1'>
            <img src="https://dancitysub.com/static/dashboard/assets/img/resultchecker.png" alt="" />
            <h1>Buy Jamb Pin</h1><hr/>
            <p>Start enjoying this very low rates for your internet browsing databundle</p>
            <button>BUY NOW</button>
        </div>
        <div className='card1'>
            <img src="https://dancitysub.com/static/dashboard/assets/img/utility.jpg" alt="" />
            <h1>Buy Electricity</h1><hr/>
            <p>Start enjoying this very low rates for your internet browsing databundle</p>
            <button>BUY NOW</button>
        </div>

      
    </div>
   </div>
  )
}

export default Card
