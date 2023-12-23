import React from 'react'
import { ICertificate } from '../../data/certificates'
import SkillBadge from '../asset/SkillBadge'
import { GrCertificate } from "react-icons/gr";

const CertificateBox = ({data, active, handleClick}: {data: ICertificate, active: boolean, handleClick: () => void}) => {
  return (
    <div
        className={`px-5 py-5 w-full rounded-lg border overflow-hidden hover:shadow-lg transition-shadow relative bg-slate-100 ${(active) && "ring-indigo-500 ring-4"}`}>
        <div className="w-full flex flex-col md:flex-row">        
          <div className="w-full flex flex-col">
              <div className="font-bold text-base">{data.title}</div>
              <div className="text-sm">{data.host}</div>
              <div className="text-sm">{data.date}</div>
              <div className="mt-2 flex flex-wrap gap-y-1 gap-x-2">
                {
                  data.skill.map((e, idx) => {
                    return <SkillBadge key={idx} text={e} />
                  })
                }
              </div>
          </div>
          <div className="w-full md:w-fit md:ml-2 flex flex-col md:flex-row justify-center items-center mt-2 md:mt-0">
              <a href={data.url} target="_blank" className="w-fit h-fit rounded-lg hover:bg-slate-200 px-1 py-1 transition-colors flex">
                <GrCertificate className="w-[20px] h-[20px]" />
                <div className="block md:hidden text-sm ml-2">
                  View
                </div>
              </a>      
          </div>
        </div>
    </div>
  )
}

export default CertificateBox