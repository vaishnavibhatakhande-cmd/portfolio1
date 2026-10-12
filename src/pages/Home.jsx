import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Certifications from '../components/Certifications.jsx'
import Education from '../components/Education.jsx'
import Achievements from '../components/Achievements.jsx'
import Contact from '../components/Contact.jsx'
import SectionDivider from '../components/SectionDivider.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Contact />
    </>
  )
}
