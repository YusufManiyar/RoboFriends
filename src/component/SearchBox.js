import React from 'react'

function SearchBox({onSearchChange}) {
    
  return (
    <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' type = 'text' placeholder='SearchRobo' onChange={onSearchChange} />
    </div>
  )
}

export default SearchBox