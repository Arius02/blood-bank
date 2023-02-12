import React from 'react'

const LIs = ({heading, liList, addition:{subHeading}}) => {
  return <div>
    <h2 className='text-xl font-semibold my-4 text-primary'>{heading}</h2>
     <p className='leading-8'>{subHeading}</p>
    <ul className='list-disc'>
      {liList.map((li,index)=><li className='' key={index}>{li}</li>)}
    </ul>
  </div>
}

export default LIs