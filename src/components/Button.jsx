import React from 'react'

const Button = ({text}) => {
  return (
    <button className='btn'
    onClick={event => event.target.innerText = 'You clicked me!'}>
        { text}
        </button>
  )
}

export default Button