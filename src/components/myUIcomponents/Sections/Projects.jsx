import ProjectSection from "../Projects/ProjectSection"

function Projects() {
  return (
    <div className='mt-4 sm:mt-14'>
      <div className="mx-auto py-5 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="headings mb-2">
            Projects
          </h2>
        <p
          className="text-neutral-500 text-sm md:text-base">
            Check out my Projects
        </p>
      </div>
     <div className="mt-4">
        <ProjectSection />
     </div>
    </div>
  )
}

export default Projects
