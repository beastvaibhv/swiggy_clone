import React, {useState} from 'react';

const Section = ({title, description, handleToggle, selected, k}) => {
    
  return (
    <div className="border">
        <div className='bg-slate-200'>
        <div className="flex justify-between" 
           onClick={()=>{
              
              handleToggle(k)
              }}>
        <div>
            <h2 className="font-semibold text-base">{title}
            </h2>
        </div>
        <div> {(selected === k )? ("-"):("+")}
        </div> 
      </div>
      
      </div>
        <div>
        {(selected === k) && <p className="text-sm">{description}</p>}
      </div>
      
    </div>
  )
}

export default Section;
