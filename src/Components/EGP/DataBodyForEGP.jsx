
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import HeaderT2 from '../../Helper/HeaderT2';
import Footer from '../../Helper/Footer';
import DataTable from '../../Helper/DataTable';


function DataBodyForEGP({ description_2, attributes, pageno, tdata }) {
    const priceListHeaderDetails = useSelector((state) => state.priceListHeaderDetails)
    const rowPlaceValue = useSelector((state) => state.rowPlaceValue)

    const thead = priceListHeaderDetails.table_header_title

    const header_length=useMemo(() => {
        return [...Array(priceListHeaderDetails?.table_header_title?.length)?.keys()]
    },[])

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
                    {attributes &&
                            <div className='px-16 pt-5'>
                            <span className='font-extrabold'>{attributes}</span>
                            </div>
                        }
                    <div className='px-16 pt-5 pb-20'>
                        <DataTable thead={thead.map((x) => { return x?.replaceAll("_", " ") })}
                            tbody={
                                <React.Fragment >
                                    <tr>
                                        {header_length?.map((i, j) => {
                                            return (
                                                <td key={i} className='text-[#626262] text-xs td p-2.5'></td>
                                            )
                                        })}
                                    </tr>
                                    {tdata?.val?.length? tdata?.val?.map((i, j) => {
                                        const is_there_f = i?.F.length
                                        const is_there_s = i?.S.length
                                        return (
                                            <>
                                                {j!==0 &&<tr>
                                                    {header_length?.map((i, j) => {
                                                        return (
                                                            <td key={i} className='text-[#626262] text-xs td p-2.5'></td>
                                                        )
                                                    })}
                                                </tr>}
                                                {is_there_f ? <>
                                                {i?.parent_classfications?<tr ><td colSpan={header_length.length} className='text-[#626262] text-xs text-left font-bold pl-4 td'>{i?.parent_classfications}</td></tr>:""}
                                                {i?.product_classifications ? <tr ><td colSpan={header_length.length} className='text-[#626262] text-xs text-left font-bold pl-4 td'>{i?.product_classifications}</td></tr>:""}
                                              {i?.F?.map((f,x) => {
                                                return (
                                                    <tr key={x}>
                                                    <td className='text-[#626262] text-xs td'>{f.brand_name}</td>
                                                    <td className='text-[#626262] text-xs td'>{f.item_code}</td>
                                                    <td className='text-[#626262] text-xs td'>{f.uom}</td>
                                                    <td className='text-[#626262] text-xs td'>{f.list_price}</td>
                                                    <td className='text-[#626262] text-xs td'>{f.category}</td>
                                                </tr>
                                                )
                                            })} 
                                                </>
                                                    : ""}
                                               {j==is_there_f.length&& <tr>
                                                    {header_length?.map((i, j) => {
                                                        return (
                                                            <td key={i} className='text-[#626262] text-xs td p-2.5'></td>
                                                        )
                                                    })}
                                                </tr>}
                                                <>
                                                    {i?.optional_classification ? <tr ><td className='text-[#626262] text-xs text-left font-bold pl-4'>{i?.optional_classification}</td></tr> : ""} 
                                                    {(!is_there_f && i?.parent_classfications) ? <tr ><td colSpan={header_length.length} className='text-[#626262] text-xs text-left font-bold pl-4 td'>{i?.parent_classfications}</td></tr> : ""}
                                                    {(!is_there_f && i?.product_classifications) ? <tr ><td colSpan={header_length.length} className='text-[#626262] text-xs text-left font-bold pl-4 td'>{i?.product_classifications}</td></tr> : ""}
                                                    {i?.S?.map((f,x) => {
                                                        return (
                                                            <tr key={x}>
                                                                <td className='text-[#626262] text-xs td'>{f.brand_name}</td>
                                                                <td className='text-[#626262] text-xs td'>{f.item_code}</td>
                                                                <td className='text-[#626262] text-xs td'>{f.uom}</td>
                                                                <td className='text-[#626262] text-xs td'>{f.list_price}</td>
                                                                <td className='text-[#626262] text-xs td'>{f.category}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </>
                                            </>
                                        )
                                    }) : ""}
                                    
                                </React.Fragment>
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
export default DataBodyForEGP