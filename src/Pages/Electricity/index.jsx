
import React from 'react'
import DashboardHeader from '../Dashboard/component/DashboardHeader'
import Sidebar from '../Dashboard/component/Sidebar'
import ElectricityCompo from './component/Electricitycompo'
import TextElect from './component/TextElect'

const Electricity = () => {
  return (
    <div>
        <DashboardHeader/>

        <Sidebar/>
        <TextElect/>
        <ElectricityCompo/>
    
      
    </div>
  )
}

export default Electricity
