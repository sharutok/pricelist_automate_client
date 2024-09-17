import React from 'react'
import IMAGES from '../Images/Image'
import HeaderT1 from '../Helper/HeaderT1'
import Footer from '../Helper/Footer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MessageLetter() {
    const priceListHeaderDetails = useSelector((state) => state.priceListHeaderDetails)
    const { pname } = useParams()
  return (
      <div className='w-[210mm] min-h-[297mm] px-16 pt-14 '>
          <div className='h-[100%]' >
              <HeaderT1 />
          <div className='flex justify-end mt-20'>
              <div className='text-right'>
                      <p>{priceListHeaderDetails.pricelist_reference_date}</p>
                      <p><span className='font-bold'>Price List Ref. No.:</span> {priceListHeaderDetails.pricelist_reference_no}</p>
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
                      <p className='text-[#ed1c24] text-xl font-semibold'>Sub: Price List for {priceListHeaderDetails.pricelist_description} Price List eﬀective from {priceListHeaderDetails.pricelist_reference_date}</p>
              </div>
              <div className='mt-5'>
                  <p>Please ﬁnd enclosed herewith the Price List</p>
                      <p>[Ref. No.: {priceListHeaderDetails.pricelist_reference_no}]</p>
                      <p>for {priceListHeaderDetails.pricelist_description} eﬀective from {priceListHeaderDetails.pricelist_reference_date} This Price List supersedes all the Price Lists released earlier with immediate eﬀect.</p>
              </div>
              <div>
          <p>Thanking you,</p>
          <p>Yours faithfully,</p>
        </div><p>For{" "}<span className='font-semibold'>ADOR WELDING LIMITED,</span></p>
                  <div className='flex justify-between'>
                      
                  <div>
                          <img loading='lazy' className='w-[10rem] w3-animate-zoom' src={IMAGES.sign} />
          <p>Vineet Bansal</p>
          <p>Head-Welding Business India & Customer Success</p>
              </div>
            {(pname ==='20283e81-65be-4106-818f-f015bb67a10f') &&  <div>
                          <img loading='lazy' className='w-[7rem] w3-animate-zoom' src={IMAGES.rajesh_josh_sign} />
                          <p>Rajesh Joshi</p>
                          <p>Executive Vice President</p>
              </div>}
           </div>
          <p className='mt-10'>Hereinafter ADOR means ADOR WELDING LIMITED</p>
              </div>
          </div>
            {/* <div className='relative'>
            <Footer />
            </div> */}
    </div>
  )
}

export default MessageLetter