import React, { useState } from 'react'
import ProjectBox from './ProjectBox'

import { projectsData } from '../../data/projects'

const ProjectsList = () => {

  const [activeIdx, setActiveIdx] = useState<number>(-1)

  function toggleButton(idx: number) {
    if (activeIdx === idx) {
      setActiveIdx(-1)
    }
    else {
      setActiveIdx(idx)
    }
  }

  return (
    <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-fit">
        {projectsData.map((e, idx) => {
          return <ProjectBox key={idx} data={e} active={(activeIdx === idx)} handleClick={() => toggleButton(idx)} />
        })}
    </div>
  )
}

export default ProjectsList