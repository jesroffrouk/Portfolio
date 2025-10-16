import PortfolioCards from "./PortfolioCards"

function Projects() {
  return (
    <div className='mt-14 mx-4 sm:mx-16'>
      <div className="mx-auto py-16 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-lg md:text-3xl mb-2 text-white font-bold">
            Projects
          </h2>
        <p
          className="text-neutral-500 text-sm md:text-base">
            Check out my Projects
        </p>
      </div>
     <div className="mt-4">
        <PortfolioCards />
     </div>
    </div>
  )
}

export default Projects
