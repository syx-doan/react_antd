import React from 'react'
import AppAbout from '../components/common/home/About'
import AppFeature from '../components/common/home/Feature'

import AppHero from '../components/common/home/Hero'

export default function AppHome() {
  return (
   <div className='main'>
        <AppHero/>
        <AppAbout/>
        <AppFeature/>
   </div>
  )
}
