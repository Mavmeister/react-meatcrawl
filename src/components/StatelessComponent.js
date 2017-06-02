import React from 'react'

function HelloWorld (props) {
	
  return (
    <div>Hello {props.text}</div>
  )
}

HelloWorld.defaultProps = {
	text: "Please enter your name..."
}

export default HelloWorld