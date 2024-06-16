import Hero from '@/components/elements/Hero'
import AboutUsSection from '@/components/elements/HomeAU'
import HomeDivider from '@/components/elements/HomeDivider'
import HomeNews from '@/components/elements/HomeNews'
import OurTeamSection from '@/components/elements/HomeOT'
import HomeInfo from '@/components/elements/HomeInfo'
import React from 'react'

const HomeModule = () => {
  return <main className="min-h-screen">
    <Hero />
    <AboutUsSection />
    <OurTeamSection />
    <HomeDivider />
    <HomeNews />
    <HomeInfo />
  </main>
}

export default HomeModule
