import React from 'react'
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Clients from './sections/clients.jsx'
import Footer from './sections/Footer.jsx'
import Contact from './sections/Contact.jsx'
import WorkExperience from './sections/Experience.jsx'
import Stars from './components/Stars.jsx';
import Tech from './sections/Tech.jsx'
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Stars />
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
    
  )
}

export default App