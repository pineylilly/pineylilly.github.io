import React, { useState } from 'react'
import CertificateBox from './CertificateBox'
import { certificatesData } from '../../data/certificates'

const CertificatesList = () => {
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
        <div className="flex flex-col w-full max-w-[435px] md:max-w-[890px] lg:max-w-[1345px] space-y-3">
            {
                certificatesData.map((e, idx) => {
                    return <CertificateBox key={idx} data={e} active={(activeIdx === idx)} handleClick={() => toggleButton(idx)} />
                })
            }
        </div>
    )
}

export default CertificatesList