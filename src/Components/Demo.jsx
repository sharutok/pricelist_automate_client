import React from 'react'
import { Link } from 'react-router-dom'

function Demo() {
  return (
      <div >
                <div className='flex justify-center items-center w-[100%] gap-5 p-5 bg-[#FFFF]'>
        <img loading='lazy' className='w3-animate-zoom w-[2.5rem]' src={new URL('../Images/electrode-pricelist-collection/Picture6.png', import.meta.url).href} />
                    <p className='text-3xl font-bold text-[#dd8686]'>PRICELIST - DEMO</p>
                </div>
              <div className='flex justify-center  h-screen '>
        <div className='grid w-fit gap-5 p-10 h-fit'>
          <button onClick={() => window.location.href = "/price-list/a8904e2a-353a-4694-9d3a-d685d1243f43"} class="button-39" role="button">WELDING ELECTRODES</button>
          <button onClick={() => window.location.href = "/price-list/c9c2f1c0-3872-4a9b-8045-7b2505e271a0"} class="button-39" role="button">WIRES & FLUX</button>
          <button onClick={() => window.location.href = "/price-list/56826c28-7726-479e-9050-c0b4a79d2113"} class="button-39" role="button">WELDING SPARE PARTS</button>
          <button class="button-39" role="button">WELDING EQUIPMENT, GCP & PPE</button>
              <button onClick={() => window.location.href ="/price-list/20283e81-65be-4106-818f-f015bb67a10f"} class="button-39" role="button">HYPERTHERM</button>
          </div>
              </div>
    </div>
  )
}

export default Demo