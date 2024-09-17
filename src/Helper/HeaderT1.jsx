import React from 'react'
import IMAGES from '../Images/Image'
import { useParams } from 'react-router-dom'

function HeaderT1() {
  const { pname } = useParams()
  return (
    <>
      { whichImage(pname)}
    </>
  )
}

function whichImage(id) {
  switch (id) {
    //hypertherm
    case '20283e81-65be-4106-818f-f015bb67a10f':
      return (<div className='flex justify-end'>
        <img loading='lazy' className='w-[5rem]' src={IMAGES.hypertherm_ador_unity_logo} />
      </div>)
      
    default:
      return (
        <div className='flex justify-end'>
        <img loading='lazy' className='w-[3rem]' src={IMAGES.imagex} />
        </div>
      )

  }
}

export default HeaderT1