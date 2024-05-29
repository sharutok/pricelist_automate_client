import React from 'react'
import IMAGES from '../Images/Image'
import HeaderT1 from '../Helper/HeaderT1'
import IndexTable from '../Helper/IndexTable'
import Footer from '../Helper/Footer'

function Indexes({ dataRows }) {
    const attributes=dataRows.map(x => {
        return(x.attributes);
    })
  return (
      <div className='w-[210mm] h-[297mm]  px-16 pt-14'>
          <div className='h-[100%] '>
          <HeaderT1 />
          <div className='mt-10'>
              <p className='font-semibold text-3xl text-[#ed1c24]'>INDEX</p>
          <p className='border-t-2'></p>
          <p className='font-medium text-2xl'> Welding Electrodes-Price List</p>
          </div>
          <div className='mt-20'>
          <IndexTable tbody={
                      attributes?.map((x, i) => {
                  return (
                      <tr className='text-left'>
                          <td><li>{x}</li></td>
                          <td>{i+1}</td>
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