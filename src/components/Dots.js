import React from 'react';
import data from './sliderImage';

function Dots(props) {
    return (
        <div className="all-dots">
            {data.map((slide, index)=>(
                <span key={index} className={`${props.activeIndex === index ? 'dot active-dot':'dot'}`} 
                onClick={(event)=>props.onClick((event.target.value = index))}></span>
            )
            )}
            
        </div>
    )
}

export default Dots
