import React from 'react'
import AppAbout from '../components/common/home/About'
import AppContact from '../components/common/home/Contact'
import AppFaq from '../components/common/home/Faq'
import AppFeature from '../components/common/home/Feature'

import AppHero from '../components/common/home/Hero'
import AppPricing from '../components/common/home/Pricing'
import AppWork from '../components/common/home/Work'

export default function AppHome() {
  return (
   <div className='main'>
        <AppHero/>
        <AppAbout/>
        <AppFeature/>
        <AppWork/>
        <AppFaq/>
        <AppPricing/>
        <AppContact/>
   </div>
  )
}
