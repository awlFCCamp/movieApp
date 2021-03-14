import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {query,setQuery,error} = useGlobalContext()
  return (
    <form type='submit' className='search-form' onSubmit={e=>e.preventDefault()}>
      <h2>Search a movie</h2>
      <input type='text' className='form-input' value={query} onChange={e=>setQuery(e.target.value)}/>
      {error.show&&<div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
