import React from 'react'
import '../Table.css'
function DataTable({thead,tbody}) {

  return (
      <div className='table-container '>
          <table className='table w-[100%]'>
              <thead className='thead bg-[#555259] text-[#ffff]'>
                  <tr >
                      {thead.map((h, i) => {
                          return (
                              <th className='th text-sm' key={i}>{h}</th>
                          )
                      })}
                  </tr>
              </thead>
              <tbody>
                  {tbody}
              </tbody>
          </table>
      </div>
  )
}

export default DataTable




