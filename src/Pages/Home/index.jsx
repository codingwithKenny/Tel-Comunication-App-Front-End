

import React from 'react'
import Header from './Component/Header'
import Section1 from './Component/Section1'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import Card from './Component/Card'
import Footer from './Component/Footer'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
        {t}<Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Card/>
        <Footer/>
    
      
    </div>
  )
}

export default Home
