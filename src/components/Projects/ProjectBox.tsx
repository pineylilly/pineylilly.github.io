import React from 'react'
import { IProject } from '../../data/projects'
import TagBadge from '../asset/TagBadge'
import ExternalLinkButton from '../asset/ExternalLinkButton'
import languagesColor from '../../data/languagesColor'

const ProjectBox = ({data, active, handleClick}: {data: IProject, active: boolean, handleClick: () => void}) => {
  return (
    <>
      <button
          onClick={handleClick}
          className={`group flex flex-col w-full h-full max-w-[435px] aspect-[2833/1067] rounded-lg border overflow-hidden hover:shadow-lg transition-shadow relative ${(active) && "ring-indigo-500 ring-4"}`}
      >
          <img src={data.image} />
          <div className="w-full h-full z-10 bg-slate-100 absolute px-3 py-3 hidden group-hover:flex flex-col justify-center transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-95">
            <div className="w-full text-center">{data.title}</div>
            <div className="w-full flex justify-center space-x-1">
              {
                data.tags.map((e, idx) => {
                  return <TagBadge key={data.title + e} text={e} />
                })
              }
            </div>
          </div>
      </button>
      {
        (active) && 
        <div className="px-5 py-5 max-w-[435px] md:max-w-[890px] lg:max-w-[1345px] col-span-1 md:col-span-2 lg:col-span-3 flex flex-col overflow-hidden bg-slate-100 rounded-lg border">
          <div className="font-bold mb-2">
            {data.title}
          </div>
          <div className="flex space-x-2 mb-3">
              {
                data.tags.map((e) => {
                  return <TagBadge key={data.title + e} text={e} />
                })
              }
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              {
                data.link.map((e) => {
                  return <ExternalLinkButton key={data.title + e.type} type={e.type} url={e.url} />
                })
              }
  
          </div>
          <div className="flex w-full text-sm text-wrap mt-4">
            {data.description}
          </div>
          <div className="flex flex-col mt-4 space-y-1">
              <div className="text-sm font-bold">Language:</div>
              {
                data.languages.map((e, idx) => {
                  const color = languagesColor[e as keyof typeof languagesColor].color;
            
                  return (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="relative flex h-3 w-3">
                      <span 
                        className={`inline-flex h-full w-full rounded-full opacity-75`}
                        style={{backgroundColor: color||""}}
                      ></span>
                    </span>
                    <span className="text-sm">
                      {e}
                    </span>
                  </div>
                )})
              }
              
              
          </div>
        </div>
      }
      
    </>
  )
}

export default ProjectBox