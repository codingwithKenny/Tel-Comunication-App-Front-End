
import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser'
import React from 'react'
import { Link } from 'react-router-dom'

const useDashboard = () => {
  const {handleLogout} = useGetCurrentUser()
  function MobileBar() {
    return(
        <div className='mobilebar'>
        <div className='fix'>
            <ul>
                <li><i className="fa-solid fa-house-chimney"></i></li>
                <li><i className="fa-solid fa-signal"></i></li>
                <li><i className="fa-solid fa-phone"></i></li>
                <li><i className="fa-brands fa-cc-mastercard"></i></li>
                <li><i className="fa-solid fa-hourglass-half"></i></li>
                <Link to="/contact-support">
                    <li><i className="fa-brands fa-cuttlefish"></i></li>
                </Link>
            </ul>
            <ul className='sidebardown'>
                <li><i className="fa-regular fa-user"></i></li>
                <li onClick={handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i></li>
            </ul>
        </div>
    </div>
    )
    
   }
 
  return {
    MobileBar
  }
}

export default useDashboard
