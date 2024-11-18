import React from 'react'
import { useSelector } from 'react-redux'
import DataTable from '../Helper/DataTable'
import Footer from '../Helper/Footer'
import HeaderT2 from '../Helper/HeaderT2'


function DataBody({ pageno, attributes, tdata,  description_2 }) {  
  const priceListHeaderDetails = useSelector((state) => state.priceListHeaderDetails)
  const rowPlaceValue = useSelector((state) => state.rowPlaceValue)
  const thead = priceListHeaderDetails.table_header_title
  
  return (
    <div className=' w-[210mm] min-h-[297mm]  border mt-5' >
      <div className='relative '>
      </div>
      <div className='h-[100%]'>
          <div className='px-16 pt-14'>
          <HeaderT2 priceListHeaderDetails={priceListHeaderDetails} />
          </div>
        <p className='border-t-2'></p>
        <>
          <div className='px-16 pt-5 pb-20'>
            {description_2?.[0] &&
              <div className='mb-5'>
                <span className='font-bold'>{description_2?.[0]}</span>
              </div>
            }
            <DataTable thead={thead.map((x)=>{return x.replaceAll("_"," ")})}
              tbody={
                <>
                  <tr>
                    {[...Array(priceListHeaderDetails.table_header_title.length).keys()].map((i, j) => {
                      return (
                        <td key={i} className='text-[#626262] text-xs td p-2.5'></td>
                      )
                    })}
                  </tr>
                  <tr>
                    <td colSpan={3} className='text-[#626262] text-xs text-left font-bold pl-4'>{attributes}</td>
                  </tr>
                  <tr>
                    {[...Array(priceListHeaderDetails.table_header_title.length).keys()].map((i,j) => {
                      return (
                        <td key={i} className='text-[#626262] text-xs td p-2.5'></td>
                      )
                    })}
                  </tr>
                  {tdata?.map((i, j) => {
                    return (
                      <tr className='tr' key={j + i}>
                        {rowPlaceValue.map((x, d) => {
                          return (
                            <td key={d} className='text-[#626262] text-xs td'>{i[x]}</td>
                          )
                        })}
                      </tr>
                    )
                  })}
             </>
              }
            />
      </div>
        </>
      </div>
      <div className='relative mx-16'>
        <Footer pageno={pageno} />
      </div>
    </div>
  )
}

export default DataBody


