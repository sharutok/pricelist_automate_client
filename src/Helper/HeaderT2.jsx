import React from 'react'
import IMAGES from '../Images/Image'
import { useParams } from 'react-router-dom'

export default function HeaderT2({ priceListHeaderDetails }) {
    const { pname } = useParams()
    return (
      <div className='mb-2'>
            <div className='flex justify-end'>
                <>
                {    whichImage(pname)}
                </>
            </div>
            <p className='text-4xl text-[#ee3e43]'>Price List</p>
            <div className='flex justify-between items-center'>
                <div className='grid gap-2'>
                    <p className='text-xl text-[#767676] '>{priceListHeaderDetails.pricelist_description}</p>
                </div>
                <div className='text-right'>
                    <p className='text-[#ee3e43] text-xs'>w.e.f. {priceListHeaderDetails.pricelist_reference_date}</p>
                    <p className='text-[#767676] text-xs'>Ref. No.: {priceListHeaderDetails.pricelist_reference_no}</p>
                </div>
            </div>
                
      </div>
  )
}

function whichImage(id) {
    switch (id) {
        //hypertherm
        case '20283e81-65be-4106-818f-f015bb67a10f':
            return <img loading='lazy' className='w-[5rem]' src={IMAGES.hypertherm_ador_unity_logo} />
        default:
           return <img loading='lazy' className='w-[3rem]' src={IMAGES.imagex} />

    }
}