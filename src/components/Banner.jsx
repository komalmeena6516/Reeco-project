import React from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import "./banner.css";

const Banner = () => {
  return (
    <div className='banner'>
        <div className="data" style={{margin: '0 100px'}}>
            <p>Order <ChevronRightRoundedIcon className='rightarw'/> <span className='underline'>Order3245ABC</span></p>

            
            <div className="order" style={{display: 'flex', justifyContent: 'space-between'}}>
                <p className="orderNum">Order 32457ABC</p>
                <div className="buttons">
                    <button className="back">Back</button>
                    <button className="approve-order">Approve order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner