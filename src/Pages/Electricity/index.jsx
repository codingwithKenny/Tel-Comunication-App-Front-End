
import React from 'react'
import DashboardHeader from '../Dashboard/component/DashboardHeader'
import Sidebar from '../Dashboard/component/Sidebar'
import ElectricityCompo from './component/Electricitycompo'

const Electricity = () => {
  return (
    <div>
        <DashboardHeader/>

        <Sidebar/>
        <ElectricityCompo/>
    
      
    </div>
  )
}

export default Electricity
