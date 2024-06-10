import React, { useEffect } from 'react'
import DashboardHeader from './component/DashboardHeader'
import Sidebar from './component/Sidebar'
import DashboardSec1 from './component/DashboardSec1'
import SecondSection from './component/SecondSection'
import ThirdSection from './component/ThirdSection'
import FourthSection from './component/FourthSection'
import EndPart from './component/EndPart'
import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const {currentUser} = useGetCurrentUser()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!currentUser?.email) {
  //     navigate("/auth");
  //   }
  // }, [currentUser]);

  return (
    <div>
      <DashboardHeader/>
      <Sidebar/>
      <DashboardSec1/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      {/* <EndPart/> */}

    </div>
  )
}

export default Dashboard
