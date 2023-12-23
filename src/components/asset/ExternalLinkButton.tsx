import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from "react-icons/tb";

const ExternalLinkButton = ({type, url}: {type: string, url: string}) => {
  return (
    <>
        {
            (type === "website") &&
            <a
                href={url}
                target="_blank"
                className="bg-sky-700 hover:bg-sky-600 w-fit flex items-center rounded-md px-3 py-2 text-xs font-medium text-white transition duration-150 ease-in-out space-x-2"
                >
                <TbWorld className="w-[16px] h-[16px]" />
                <div className="text-center justify-center grid leading-3 w-fit">Website: {url}</div>
            </a>
        }
        {
            (type === "github") &&
            <a
                href={url}
                target="_blank"
                className="bg-[#333] hover:bg-gray-700 w-fit flex items-center rounded-md px-3 py-2 text-xs font-medium text-white transition duration-150 ease-in-out space-x-2"
                >
                <FaGithub className="w-[16px] h-[16px]" />
                <div className="text-center justify-center grid leading-3">GitHub Repository</div>
            </a>
        }

    </>
    
  )
}

export default ExternalLinkButton