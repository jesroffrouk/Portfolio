import Hero from './components/myUIcomponents/Hero'
import About from './components/myUIcomponents/About'
import Projects from './components/myUIcomponents/Projects'
import Skills from './components/myUIcomponents/Skills'
import Education from './components/myUIcomponents/Education'
import ContactUs from './components/myUIcomponents/ContactUs'
import Footer from './components/myUIcomponents/Footer'
import { DockDemo } from './components/myUIcomponents/Dock'

function App() {
  return (
    <>
      <div className='bg-home-bg text-home-text font-home overflow-x-hidden relative'>

        <div className='mx-6 sm:mx-10 md:mx-32 lg:mx-52 sm:mt-6 mt-4 pb-20'>
        <Hero />

        {/* About section */}
        <About />
        {/* Projects section */}
        <Projects />
        {/* Skills section */}
        <Skills /> 
        {/* education section */}
        <Education />

        {/* contact me section */}
        <ContactUs />

        <Footer />
        <DockDemo />
        </div>

      </div>
    </>
  )
}

export default App
