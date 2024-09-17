import React from 'react'

function BackToIndexBtn() {
  return (
      
          <div className='fixed bottom-5 flex justify-center bg-[red]'>
          <div className='hover:underline hover:underline-offset-4  hover:cursor-pointer font-bold '>
              <a href={`#section-index`}>
                  Back To Index
              </a>
          </div>
          </div>
  )
}

export default BackToIndexBtn