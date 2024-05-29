import React, { useEffect, useState } from 'react'
import HeaderT2 from '../Helper/HeaderT2'
import Footer from '../Helper/Footer'
import DataTable from '../Helper/DataTable'


function DataBody({ pageno,attributes, tdata }) {  
  return (
    <div className='w-[210mm] h-[297mm] border mt-5'>
      <div className='h-[100%]'>
          <div className='px-16 pt-14'>
          <HeaderT2 />
          </div>
          <p className='border-t-2'></p>
        <>
          {/* <p className='px-16 pt-5 text-2xl font-bold'>{attributes}</p> */}
          <div className='px-16 pt-5'>
            {
            }
            <DataTable thead={["Item Code", "Classiﬁcation", "Brandname", "Size(mm)", "UoM", "List Price as per UoM"]}
              tbody={
                <>
                  <tr>
                    {[...Array(6).keys()].map((i)=>{
                      return (
                        <td className='text-[#626262] text-xs td p-2.5'></td>
)
                    })}
                  </tr>
                  <tr>
                    <td colSpan={6} className='text-[#626262] text-xs text-left font-bold pl-4'>{attributes}</td>
                  </tr>
                  <tr>
                    {[...Array(6).keys()].map((i) => {
                      return (
                        <td className='text-[#626262] text-xs td p-2.5'></td>
                      )
                    })}
                  </tr>
                     {tdata?.map((i, j) => {
                  return (
                  <tr className='text-left tr' key={j}>
                    <td className='text-[#626262] text-xs td'>{i.item_code}</td>
                    <td className='text-[#626262] text-xs td'>{i.classification != "0" ? i.classification : ""}</td>
                    <td className='text-[#626262] text-xs td'>{i.brand_name}</td>
                    <td className='text-[#626262] text-xs td'>{i.size}</td>
                    <td className='text-[#626262] text-xs td'>{i.uom}</td>
                    <td className='text-[#626262] text-xs td'>{i.price_list_amt}</td>
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







