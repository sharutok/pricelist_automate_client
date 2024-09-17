import axios from 'axios'
import html2canvas from 'html2canvas'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Token from '../CustomHooks/useGenerateHooks'
import { endpoints } from '../Helper/Api'
import { setDataRows, setIndexes, setPricelistHeaderDetails, setRowPlaceValue } from '../redux/actions'
import DataBody from './DataBody'
import FirstPage from './FirstPage'
import ImageP from './ImageTemplate'
import Indexes from './Indexes'
import Intro from './Intro'
import LastPage from './LastPage'
import MessageLetter from './MessageLetter'
import TermsAndConditions from './TermsAndConditions'
import IndexesForEGP from './EGP/IndexesForEGP'
import DataBodyForEGP from './EGP/DataBodyForEGP'

function Page() {
  const { pname } = useParams()
  const dispatch=useDispatch()
  const indexes = useSelector((state) => state.indexes)
  const dataRows = useSelector((state) => state.dataRows)
  const priceListHeaderDetails = useSelector((state) => state.priceListHeaderDetails)
  

  //fetch data based on pricelist id
  async function fetchData() {
    const token = await Token()
    const data = await axios.post(endpoints.get_data_based_on_pricelist_name, {
      pname
    }, {
      headers: { Authorization: `Bearer ${token}}` }
    })
    dispatch(setRowPlaceValue(data?.data?.body))
    dispatch(setDataRows(data?.data?._final_data));
    dispatch(setIndexes(data?.data?.index))
  }

  //fetch pricelist header info based on pricelist id
  const fetchHeaderData = async () => {
    const data = await axios.post(endpoints.get_header_based_on_pricelist_name, { pname })
    dispatch(setPricelistHeaderDetails({ ...data?.data }))
  }

  const observer = useRef(null);
  
/*
useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Currently visible ID:', entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5 // Adjust this threshold as needed
    });

    const elements = document.querySelectorAll('.scrollable-component');
    elements.forEach(element => observer.current.observe(element));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  */
  
  useEffect(() => {
    fetchHeaderData()
    fetchData()
  }, [])

  const handleCaptureClick = async () => {
    if (captureRef.current) {
      // Wait for all images within the captureRef to load
      const images = captureRef.current.getElementsByTagName('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) {
          return Promise.resolve();
        } else {
          return new Promise(resolve => {
            img.onload = () => resolve();
            img.onerror = () => resolve();  // Resolve even if image fails to load
          });
        }
      });

      // Wait for all images to be fully loaded
      await Promise.all(imagePromises);

      const canvas = await html2canvas(captureRef.current, {
        useCORS: true,  // Enable CORS for cross-origin images
        scale: 1,       // Increase scale for better resolution
      });

      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'captured-image.png';
      link.click();
    }
  };

    const downloadHtml = () => {
      // Get the HTML content of the page
      const htmlContent = document.documentElement.outerHTML;

      // Create a Blob from the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });

      // Create a link element
      const link = document.createElement('a');

      // Set the download attribute with a filename
      link.download = 'page.html';

      // Create a URL for the Blob and set it as the href attribute
      link.href = URL.createObjectURL(blob);

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
  };

  return (
    <>
      <button onClick={downloadHtml}>Capture as Image</button>
      <div   className='flex justify-center relative'>
        <div  className='grid gap-5 my-10'>
          <div className='border'> <Intro /></div>
          <div className='border'> <ImageP /></div>
          <div className='border'> <MessageLetter /></div>
          {priceListHeaderDetails.pricelist_headers_model_name !== "price_list_egp" ?
            <div >
            {
              indexes.map((s,k) => {
                return (
                  Number(s.length) !== 0 &&
                  <div key={k} className='grid gap-5 border mt-5'>
                      <Indexes
                        indexes={s}
                      />
                  </div>
                )
              })
            }
          </div> :
            <div>
              {
                indexes.map((s, k) => {
                  return (
                    Number(s.length) !== 0 &&
                    <div key={k} className='grid gap-5 border mt-5'>
                        <IndexesForEGP
                          indexes={s}
                        />
                    </div>
                  )
                })
              }
              
          </div>}
          <div className='border'> <FirstPage/></div>
          {priceListHeaderDetails.pricelist_headers_model_name !== "price_list_egp" ?<div >
            {
              dataRows?.map((val, i) => {
              return (
                <div  key={i} id={`section${i + 1}`} className='grid gap-5 scrollable-component'>
                  <DataBody
                    attributes={val?.attributes}
                    description_2={val?.description_2}
                    pageno={i}
                    tdata={val?.data}
                  />
                </div>
              )
              })
            }
          </div> :
            <div>
                {
                dataRows?.map((val, i) => {
                  console.log(i + 1);
                  return (
                    <div  key={i} id={`section${Number(i + 1)}`} className='grid gap-5 scrollable-component'>
                      <DataBodyForEGP
                        attributes={val?.attributes}
                        description_2={val?.description_2}
                        pageno={i}
                        tdata={val}
                      />
                    </div>
                  )
                  })
                }
            </div>}
          <div className='border'> <TermsAndConditions /></div>
          <div className='border'> <LastPage /></div>
        </div>
      </div>
    </>
  )
}

export default Page
