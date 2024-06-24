import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import useDashboard from '../hook/useDashboard';
import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser';

const Sidebar = () => {
    const [icon, setIcon] = useState(false);
    const {MobileBar}=useDashboard()
    const {handleLogout} = useGetCurrentUser()
    
    function handleBars() {
        setIcon(!icon);
    }

    return (
        <div>
            <div onClick={handleBars} className="iconContainer">
                {!icon ? (
                    <i id='xbarIcon' className="fa-solid fa-xmark"></i>
                ) : (
                    <i id='menubarIcon' className="fa-solid fa-bars"></i> 
                )}

                 
            </div>
            {icon && <MobileBar />}
            
            
            <div className="sidebarContainer">
                <div className='fix1'>
                <ul className='top'>
                    <li><i className="fa-solid fa-house-chimney"></i><span>DashBoard</span></li>
                    <Link to={'/dashboard/buydata'}> <li><i className="fa-solid fa-signal"></i><span>Buy Data</span></li></Link>
                <Link to={'/dashboard/buyairtime'}><li><i className="fa-solid fa-phone"></i><span>Buy Airtime</span></li></Link> 
                  <li><i className="fa-brands fa-cc-mastercard"></i><span>Fund wallet</span></li>
                  <Link to={'/dashboard/history'}>  <li><i className="fa-solid fa-hourglass-half"></i><span>Transaction History</span></li></Link>
                    
                        <li><i className="fa-brands fa-cuttlefish"></i><a href='https://wa.link/esimge'>Contact Support</a></li>
                    
                </ul>
               <div className='messageus'>
               <a href='https://wa.link/esimge' className='chatLink'><i class="fa-brands fa-whatsapp" id='whatsapp'></i>chat us</a>
               </div>
              
                <ul className='sidebardown'> 
                    <li><i className="fa-regular fa-user"></i><span> Profile</span></li>
                    <Link><li ><i className="fa fa-sign-out"></i><span onClick={handleLogout}> LogOut</span></li></Link>
                </ul>
                </div>
            </div>
            {/* {icon && <MobileBar />} */}
        </div>
    );
};

export default Sidebar;

