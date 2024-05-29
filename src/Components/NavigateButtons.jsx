import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {setPriceListName} from '../redux/actions'

function NavigateButtons() {
  const priceListName = useSelector((state) => state.priceListName);
  const dispatch = useDispatch();

  const priceListTypes = ["ADOR PRICE LIST EQPT/SPARES NOV 2023","HYPERTHERM PRICE LIST  13 APR 2024","CONSUMABLE PRICE LIST - 05 MAY 2024","TRADING PRICE LIST - OCT 2023"]
  return (
      <div>
        {priceListTypes.map((x,i) => {
          return (
          <div className='cursor-pointer' onClick={()=>dispatch(setPriceListName(x))} key={i}>
              <p>{x}</p>  
        </div>
          )
        })}
      <p className='text-center text-2xl'>{ priceListName}</p>
    </div>
  )
}

export default NavigateButtons