import React from 'react'
import DashboardHeader from '../Dashboard/component/DashboardHeader'
import DashboardSec1 from '../Dashboard/component/DashboardSec1'
import Sidebar from '../Dashboard/component/Sidebar'
import Airtimecompo from './component/Airtimecompo'
import Text from './component/text'

const Airtime = () => {
  return (
    <div>
       <DashboardHeader/>
      <Sidebar/>
      <Text/>
      <Airtimecompo/>
    </div>
  )
}

export default Airtime
