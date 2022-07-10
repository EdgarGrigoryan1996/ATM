import React from 'react'
import "./Button.css"
export default function Button({ text, func, disabled }) {
	return (
		<button className='btn' disabled={disabled} value={text} onClick={func}>{text}</button>
	)
}
