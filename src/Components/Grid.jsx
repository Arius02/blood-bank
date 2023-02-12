import React from 'react'

const Grid = ({form , media , isImage , dir ,addition}) => {
  return (<div className=' grid md:gap-x-5 gap-y-5 gap-x-0 grid-cols-2  my-10 px-10 '>
    {dir === "rtl" ? <>
    <div className="md:col-span-1 col-span-2 ">
      {form}
    </div>
      <div className='md:col-span-1 col-span-2'>
        {isImage ? <figure>
          <img src={media} className="w-[100%]" alt="research" />
        </figure> : media}
      </div>
    </> : <>
        <div className='md:col-span-1 col-span-2'>
        {isImage ? <figure>
            <img src={media} className={`w-[100%] ${addition.borderRadius && " rounded-lg"}`} alt="research" />
          </figure> : <div>{media}</div>}
      </div>
        <div className="md:col-span-1 col-span-2">
      {form}
    </div>
    </>}
  </div>
  )
}

export default Grid