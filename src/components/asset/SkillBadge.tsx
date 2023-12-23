import React from 'react'

const SkillBadge = ({text}: {text: string}) => {
  return (
    <div className="px-2 py-1 bg-indigo-500 hover:bg-indigo-400 rounded-full text-xs text-slate-100 text-center">
        {text}
    </div>
  )
}

export default SkillBadge