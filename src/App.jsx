import './index.css'
import './App.css'
import Headers from './components/myUIcomponents/Headers'
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

        <div className='mx-4 sm:mx-10 md:mx-32 lg:mx-52 sm:mt-6 mt-4 pb-20'>
          {/* <Headers /> */}

        {/* hero component */}
        {/* <div className='text-center text-2xl sm:text-4xl font-bold mt-8 mx-4'>
          <TextType 
            text={["Welcome to My Website", "It's great to have you here", "Explore and connect with me"]}
            typingSpeed={75}
            pauseDuration={4000}
            showCursor={true}
            cursorCharacter="_"
          />
        </div> */}
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
