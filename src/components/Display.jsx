const Display = ({ total, calculatedTip, people, handleReset }) => {
	const returnCurrencyAmount = (amount) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency', 
			currency: 'USD'
		}).format(amount)
	}

	return (
		<div className='display'>
			<div className="display-group">
				<div className='display-row'>
					<div className='display-label'>
						<p className='header'>Tip Amount</p>
						<p className='unit'>/ person</p>
					</div> 
					<p className='display-amount'>
						{returnCurrencyAmount(`${calculatedTip ? calculatedTip / people : 0}`)}
					</p>
				</div>
				<div className='display-row'>
					<div className='display-label'>
						<p className='header'>Total</p>
						<p className='unit'>/ person</p>
					</div>
					<p className='display-amount'>
						{returnCurrencyAmount(`${total ? total / people : 0}`)}
					</p>
				</div>
			</div>
			<button disabled={!total} onClick={handleReset} className='btn'>Reset</button>
		</div>
	)
}

export default Display