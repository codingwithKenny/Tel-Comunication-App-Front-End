import React from 'react'
import './Dashboardsec1.css'
import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser'

const DashboardSec1 = () => {
  const {currentUser} = useGetCurrentUser()
  return (
    <div className='dashboardsec1Containter'>
        <div className='dashboardsec1ContainterLeft'>
            <h1>Hello {currentUser?.userName}</h1>
            <p>Send and recieve payment easily</p>
            <div className='accoutDetails'>
                <h4>Account Number</h4>
                 <p>12345678</p>
            </div>
        </div>
        <div className='dashboardsec1ContainterRight'>
            <button>Refer a Friend</button>
        </div>
      
    </div>
  )
}

export default DashboardSec1
