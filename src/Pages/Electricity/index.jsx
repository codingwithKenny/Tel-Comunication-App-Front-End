
import React from 'react'
import DashboardHeader from '../Dashboard/component/DashboardHeader'
import Sidebar from '../Dashboard/component/Sidebar'
import ElectricityCompo from './component/Electricitycompo'
import Text from '../BuyAirtime/component/text'

const Electricity = () => {
  return (
    <div>
        <DashboardHeader/>

        <Sidebar/>
        <Text/>
        <ElectricityCompo/>
    
      
    </div>
  )
}

export default Electricity
