import React from 'react';
import ProjectShowcase from '@/components/myUIcomponents/Projects/ProjectsShowcase';
import { useParams } from 'react-router';
import { DockDemo } from '@/components/myUIcomponents/Dock';
import { projectInfo } from '@/info/projectInfo';
import ScrollToTop from '@/components/myUIcomponents/ScrollToTop';


// Example usage with sample data
export default function Projects() {
  const {slug} = useParams()

  return (
    <>
      {/* for top scroll on visiting projects  */}
      <ScrollToTop />
      <div className="bg-home-bg text-home-text font-home">
      <div className='mx-4 sm:mx-10 md:mx-32 lg:mx-52 pt-6 sm:pt-4 pb-20'>
        {slug == 'moviezone' && <ProjectShowcase project={projectInfo["moviezone"]} /> }
        {slug == 'pinpic' && <ProjectShowcase project={projectInfo["pinpic"]} /> }
        {slug == 'passwordmanager' && <ProjectShowcase project={projectInfo["passwordmanager"]} /> }
        <DockDemo />
      </div>
      </div>
    </>
  ) 
  ;
}