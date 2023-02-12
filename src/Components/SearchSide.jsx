import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchTerm } from '../Store/SearchReducer'
import { searchTerms } from '../utils/constansts'

const SearchSide = () => {
  const Dispatch = useDispatch()
  const handleClick= term =>{
    Dispatch(searchTerm({payload:term}))
  }
  useEffect(()=>{

    return ()=> Dispatch(searchTerm({payload: "all"}))
  }
  ,[])
  return <> 

  {searchTerms.map((term) => <div key={term.id} className="form-check" >
        <input className="form-check-input appearance-none rounded-full h-4 w-4 border
   border-gray-300 bg-white checked:bg-primary checked:border-primary
    focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat
     bg-center bg-contain float-left mr-2 cursor-pointer" onClick={() => handleClick(term.bloodType)}
      type="radio" name="type" id={term.bloodType}/>
        <label onClick={() => handleClick(term.bloodType)}
         className="form-check-label inline-block cursor-pointer text-gray-800" htmlFor={term.bloodType}>
          {term.text}
        </label>
      </div> )}</>
   
  
}

export default SearchSide