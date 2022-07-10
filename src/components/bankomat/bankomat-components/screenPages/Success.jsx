import React from 'react'

export default function Success({ card }) {
	return (
		<div className='success-page flex'>
			<div className="left">
				<h2>Change PIN</h2>
				<h2>Menu</h2>
				<h2>Exit</h2>
			</div>
			<div className="right">
				<h2>Cash Out</h2>
				<h2>Balance</h2>
				<h2>Deposit</h2>
			</div>
		</div>
	)
}
