 import React from 'react'
import Sidebar from '../Dashboard/component/Sidebar'
import DashboardHeader from '../Dashboard/component/DashboardHeader'
import DataCompo from './component/DataCompo'
import Heading from './component/heading'
 
 const Data = () => {
   return (
     <div>
     <DashboardHeader/>
      <Sidebar/>
      <Heading/>
      <DataCompo/>
     </div>
   )
 }
 
 export default Data
 