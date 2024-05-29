import React, { useEffect, useState } from 'react'
import Intro from './Intro'
import ImageP from './ImageP'
import MessageLetter from './MessageLetter'
import Indexes from './Indexes'
import BiggestText from './BiggestText'
import TermsAndConditions from './TermsAndConditions'
import LastPage from './LastPage'
import DataBody from './DataBody'
import NavigateButtons from './NavigateButtons'
import axios from 'axios'
function Page() {
  const [dataRows, setDataRows] = useState([])

  async function fetchData() {
    const data = await axios.get('http://localhost:8111/app/price-list/v1/chunk')
    setDataRows(data?.data?._final_data);

  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className='flex justify-center relative' >
          <div className='grid gap-5 my-10'>
      {/* <NavigateButtons/> */}
            <div className='border'> <Intro /></div> 
            <div className='border'> <ImageP /></div> 
            <div className='border'> <MessageLetter /></div> 
          <div className='border'> <Indexes dataRows={dataRows} /></div> 
            <div className='border'> <BiggestText /></div> 
          <div >
            {dataRows.map((val,i) => {
              return (
              <div className='grid gap-5'>
                  <DataBody attributes={val?.attributes} pageno={i} tdata={val?.data} />
              </div>
              )
            })
            }
          </div> 
            <div className='border'> <TermsAndConditions /></div> 
            <div className='border'> <LastPage/></div> 
          </div>
    </div>
    </>
  )
}

export default Page