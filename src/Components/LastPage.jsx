import React from 'react'
import IMAGES from '../Images/Image'

function LastPage() {
  return (
      <div className='w-[210mm] min-h-[297mm]  '>
      <img loading='lazy' className='h-[100%] w-[100%] w3-animate-zoom' src={IMAGES.lastpageimage} />
      </div>
  )
}

export default LastPage