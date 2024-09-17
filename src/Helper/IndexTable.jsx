import React from 'react'

function IndexTable({ tbody, priceListHeaderDetails }) {
  return (
      <div>
          <table className='w-[100%]'>
              <thead >
                  <tr >
                      <th className='text-left font-extrabold'>{priceListHeaderDetails.pricelist_description}</th>
                      <th className='text-left font-normal text-[#ed1c24]' >Page No</th>
                  </tr>
              </thead>
              <tbody >
                  {tbody}
              </tbody>
          </table>
    </div>
  )
}

export default IndexTable