import PropTypes from 'prop-types'
import React from 'react'

export default function Filter({onInput, rendering}) {
    
    const myForm = (event) => { 
        onInput(event.currentTarget.value)
        
      };

  return (
    <div>
      <p>Find contacts by name</p>
        <input
        onInput={myForm}
        name='form'
        type='text' 
        >
        </input>
        {/* {rendering ? <p>{rendering[0].name} {rendering[0].number}</p> : <p></p>} */}

    </div>
  )
}

Filter.propTypes ={
  onInput: PropTypes.func.isRequired,
  rendering: PropTypes.string.isRequired
}
