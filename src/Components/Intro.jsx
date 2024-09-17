import React from 'react'
import IMAGES from '../Images/Image'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Intro() {
  
  const priceListHeaderDetails = useSelector((state) => state.priceListHeaderDetails)

  const { pname } = useParams()
  return (
    <div className='w-[210mm] min-h-[297mm]  '>
      <img loading='lazy' className='h-[70%] w-[100%] w3-animate-zoom' src={whichImage(pname)} />
          <div className='mt-20 border-l-[15px] border-l-[red]  border-solid flex justify-between items-center'>
              <div className='ml-5 grid gap-2'>
          <p className='text-5xl font-semibold text-[#555259]'>PRICE LIST</p>
          <div className='bg-[#555259] p-2'>
            <p className='text-5xl text-[white]'> {priceListHeaderDetails.pricelist_description} </p>
              </div>
          <p className='text-3xl font-semibold'>w.e.f. {priceListHeaderDetails.pricelist_reference_date}</p>
              </div>
        <img loading='lazy' className='h-[15%] w-[15%] mr-10 w3-animate-zoom' src={IMAGES.stamp} />
          </div>
          <p className='mt-10 ml-10 underline decoration-[red]'>Ador India</p>
    </div>
  )
}

function whichImage(id) {
  switch (id) {
    //electrode
    case 'a8904e2a-353a-4694-9d3a-d685d1243f43':
      return IMAGES.electrode_intro
    //w&f
    case 'c9c2f1c0-3872-4a9b-8045-7b2505e271a0':
      return IMAGES['w&f_intro']
    //egp
    case '358c47c0-9fd6-4806-9316-342246108248':
      return IMAGES.egp_intro
    //hypertherm
    case '20283e81-65be-4106-818f-f015bb67a10f':
      return IMAGES.hypertherm_intro
    //spares
    case '56826c28-7726-479e-9050-c0b4a79d2113':
      return IMAGES.spares_intro

  }
}



export default Intro