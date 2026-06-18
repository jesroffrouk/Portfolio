import { WorkspaceProvider } from './components/Workspace/WorkspaceContext'
import WorkspaceViewport from './components/Workspace/WorkspaceViewport'
import Panel                 from './components/myUIcomponents/Panel/Panel'
import { TerminalWindow }    from './components/myUIcomponents/TerminalWindow/TerminalWindow'
import { DockDemo }          from './components/myUIcomponents/Dock'
import SnapScroll from './components/myUIcomponents/SnapScroll/SnapScroll'
import Hero from './components/myUIcomponents/Sections/Hero'
import Projects from './components/myUIcomponents/Sections/Projects'
import About from './components/myUIcomponents/Sections/About'
import Skills from './components/myUIcomponents/Skills/Skills'
import Experience from './components/myUIcomponents/Experience/Experience'

function App() {
  return (
    <WorkspaceProvider>
      <div className="flex flex-col w-screen h-screen overflow-hidden relative bg-[url('wallpaper.jpg')] bg-cover text-home-text font-home">

        <div className="shrink-0 px-3 pt-3">
          <Panel />
        </div>

        <div className="flex-1 min-h-0 px-3 py-2">
          <TerminalWindow title="~ Jesroff">
            <WorkspaceViewport workspaces={{
              1: <Hero />,
              2: (<SnapScroll>
                    <About />
                    <Projects />
                    <Skills />
                    <Experience />
                  </SnapScroll>)
                            ,
            }} />
          </TerminalWindow>
        </div>

        <DockDemo />
      </div>
    </WorkspaceProvider>
  )
}

export default App
