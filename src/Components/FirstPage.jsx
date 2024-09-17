import React from 'react'
import IMAGES from '../Images/Image'
import { useSelector } from 'react-redux'

function FirstPage() {
    const priceListHeaderDetails = useSelector((state) => state.priceListHeaderDetails)
  return (
      <div className='w-[210mm] min-h-[297mm]  flex items-center  '>
          <div className='flex items-center gap-10 ml-20 w-[100%]'>
              <img loading='lazy' className='w-[10rem] w3-animate-zoom' src={IMAGES.imagex} />
              <div className='grid gap-2 w-[100%]'>
          <p className='text-6xl'>Price List</p>
                  <p className='text-2xl'>{priceListHeaderDetails.pricelist_description}</p>
                  <p className='text-[#fff] mt-6 bg-[#ed1c24] font-bold w-[100%]'>
                      <span className='ml-5'>
                          w.e.f. {priceListHeaderDetails.pricelist_reference_date}
                      </span>
                  </p>
              </div>
          </div>
    </div>
  )
}

export default FirstPage