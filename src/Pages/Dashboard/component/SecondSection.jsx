import React from 'react'
import "./SecondSection.css"

const SecondSection = () => {
  return (
    <div className='balance'>
        <div className='balanceCard'>
            <h3> <i class="fa-solid fa-wallet"></i> Wallet</h3>
            <p>Available Balance</p>
            <span>$0.00</span>
        </div>
        <div className='balanceCard'>
            <h3>Wallet</h3>
            <p>Available Balance</p>
            <span>$0.00</span>
        </div>
        <div className='balanceCard'>
            <h3>Wallet</h3>
            <p>Available Balance</p>
            <span>$0.00</span>
        </div>
      
    </div>
  )
}

export default SecondSection
