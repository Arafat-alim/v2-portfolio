import React from 'react'
import LoadingScreen from '../components/LoadingScreen'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Blogs from '../components/Blogs'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import VisitorTracker from '../components/VisitorTracker'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <VisitorTracker />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Blogs />
        <Skills />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}