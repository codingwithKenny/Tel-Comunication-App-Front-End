import React from 'react'
import Sidebar from '../Dashboard/component/Sidebar'
import DashboardHeader from '../Dashboard/component/DashboardHeader'
import CableComponent from './component/CableComponent'
import TopHead from './component/TopHead'

const Cable = () => {
  return (
    <div>
        <DashboardHeader/>
        <Sidebar/>
        <TopHead/>
        <CableComponent/>
      
    </div>
  )
}

export default Cable
