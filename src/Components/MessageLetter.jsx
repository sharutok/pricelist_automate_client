import React from 'react'
import IMAGES from '../Images/Image'
import HeaderT1 from '../Helper/HeaderT1'
import Footer from '../Helper/Footer'

function MessageLetter() {
  return (
      <div className='w-[210mm] h-[297mm] px-16 pt-14 relative'>
          <div className='h-[100%]'>
              <HeaderT1 />
          <div className='flex justify-end mt-20'>
              <div className='text-right'>
            <p>05th May, 2024</p>
          <p>Price List Ref. No.: ADOR/FY25/PL/DOM/ELE/02</p>
              </div>
          </div>
          <div className='grid gap-5'>
              <div className='mt-10'>
          <p>To,</p>
          <p>All Authorized Distributors of</p>
                  <p className='text-[#ed1c24] font-semibold'>ADOR WELDING LIMITED</p>
              </div>
              <p>Dear All,</p>
              <div>
                  <p className='text-[#ed1c24] text-xl font-semibold'>Sub: Price List for Welding Electrodes Price List eﬀective from 05th May, 2024.</p>
              </div>
              <div className='mt-5'>
                  <p>Please ﬁnd enclosed herewith the Price List</p>
                  <p>[Ref. No.: ADOR/FY25/PL/DOM/ELE/02]</p>
                  <p>for Welding Electrodes eﬀective from 05th May, 2024. This Price List supersedes all the Price Lists released earlier with immediate eﬀect.</p>
              </div>
              <div>
          <p>Thanking you,</p>
          <p>Yours faithfully,</p>
        </div><p>For{" "}<span className='font-semibold'>ADOR WELDING LIMITED,</span></p>
              <div>
                  <img loading='lazy' className='w-[10rem]' src={IMAGES.sign} />
          <p>Vineet Bansal</p>
          <p>Head-Welding Business India & Customer Success</p>
              </div>
          <p className='mt-10'>Hereinafter ADOR means ADOR WELDING LIMITED</p>
              </div>
          </div>
          <div className='relative'>
          <Footer />
          </div>
    </div>
  )
}

export default MessageLetter