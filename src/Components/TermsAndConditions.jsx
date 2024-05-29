import React from 'react'
import Footer from '../Helper/Footer'
import HeaderT1 from '../Helper/HeaderT1'

function TermsAndConditions() {
  const data=["Price: Ex-works / Ex-Despatch Location.","Packing Charges included in List Price.","GST will be extra as applicable.","This Price List supersedes all previous price lists and is subject to change without prior notice.","Order shall be accepted as per Minimum Order Quantity (MOQ) or multiple of thereof.","All other terms & condition of sale will be as per AWL-Trade & Commercial Policy unless otherwise notiﬁed.",]
  return (
    <div className='w-[210mm] h-[297mm]  px-16 pt-14'>
      <div className='h-[100%]'>
      <HeaderT1/>
      <p className='font-semibold text-3xl my-10'>Terms & Conditions:</p>
      {data.map((x,i) => {
        return (
          <li className='text-xl'key={i}>{x}</li>
  )
})}
</div>
      <div className='relative'>
        <Footer />
      </div>
    </div>
  )
}

export default TermsAndConditions