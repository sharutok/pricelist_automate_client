import React from 'react'
// import IMAGES from '../Images/Image'
import HeaderT1 from '../Helper/HeaderT1'
import IndexTable from '../Helper/IndexTable'
import Footer from '../Helper/Footer'
import { useSelector } from 'react-redux'

function Indexes({ indexes }) {
    const priceListHeaderDetails = useSelector((state) => state.priceListHeaderDetails)
  return (
      <div className='w-[210mm] h-[297mm] px-16 pt-14' id='section-index'>
          <div className='h-[100%] '>
          <HeaderT1 />
          <div className='mt-5'>
              <p className='font-semibold text-3xl text-[#ed1c24]'>INDEX</p>
          <p className='border-t-2'></p>
                  <p className='font-medium text-2xl'> {priceListHeaderDetails.pricelist_description}-Price List</p>
          </div>
          <div className='mt-10 pb-10'>
                  <IndexTable priceListHeaderDetails={priceListHeaderDetails}  tbody={
                      indexes?.map((x, i) => {
                  return (
                      <tr key={i} id={`#section${x.ind}`} className='text-left'>
                          <td >
                              <li className='hover:underline hover:underline-offset-4  hover:cursor-pointer'>
                              <a href={`#section${x.ind}`}>{x.attr}</a>
                              </li>
                          </td>
                          <td className='text-nowrap'>{(x.ind - x.occurance !== x.ind) && `${x.ind - x.occurance} - `}{`${x.ind}`}</td>
                      </tr>
                  )
                })
            }/>
          </div>
            </div>
          <div className='relative '>
              <Footer />
          </div>
      </div>
  )
}

export default Indexes