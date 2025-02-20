import personIcon from '../assets/images/icon-person.svg'
import dollarIcon from '../assets/images/icon-dollar.svg'
import { useState } from 'react'

const Form = ({ bill, setBill, tip, setTip, people, setPeople }) => {
	const [isCustomSelected, setIsCustomSelected] = useState(false)

	const handleSelectedTip = (e) => {
		setTip(+e.target.value)
		setIsCustomSelected(e.target.value === '' ? false : true)
	}

	return (
		<div className='form'>
			<div className='label-group'>
				<div className='label-wrapper'>
					<label htmlFor='bill' className='label'>Bill</label>
				</div>
				<div className='number-wrapper'>
					<input 
						type='number' 
						id='bill' 
						className='number-input' 
						value={bill}
						onInput ={(e) => setBill(+e.target.value)}
					/>
					<img src={dollarIcon} aria-hidden='true' className='icon' />
				</div>
			</div>

			<div className='tip-section'>
				<p className='label'>Seleted Tip %</p>
				<div className='tip-amount-wrapper'>
					<div className='tip-amount'>
						<input 
							type='radio' 
							id='input1' 
							name='tip' 
							checked={isCustomSelected ? false : null}
							className='tip-input'
							value='5' 
							onInput={handleSelectedTip} 
						/>
						<label className='tip-btn' htmlFor='input1'>5%</label>
					</div>
					<div className='tip-amount'>
						<input 
							type='radio' 
							id='input2' 
							name='tip' 
							checked={isCustomSelected ? false : null}
							className='tip-input'
							value='10' 
							onInput={handleSelectedTip} 
						/>
						<label className='tip-btn' htmlFor='input2'>10%</label>
					</div>
					<div className='tip-amount'>
						<input 
							type='radio' 
							id='input3' 
							name='tip' 
							checked={isCustomSelected ? false : null} 
							className='tip-input'
							value='15' 
							onInput={handleSelectedTip} 
						/>
						<label className='tip-btn' htmlFor='input3'>15%</label>
					</div>
					<div className='tip-amount'>
						<input 
							type='radio' 
							id='input4' 
							name='tip' 
							checked={isCustomSelected ? false : null} 
							className='tip-input'
							value='25' 
							onInput={handleSelectedTip} 
						/>
						<label className='tip-btn' htmlFor='input4'>25%</label>
					</div>
					<div className='tip-amount'>
						<input 
							type='radio' 
							id='input5' 
							name='tip' 
							checked={isCustomSelected ? false : null}
							className='tip-input'
							value='50' 
							onInput={handleSelectedTip} 
						/>
						<label className='tip-btn' htmlFor='input5'>50%</label>
					</div>
					<div className='custom-wrapper'>
						<input
							type='number'
							id='custom'
							name='tip'
							placeholder='Custom'
							onInput={handleSelectedTip}
							className='number-input tip-custom'
						/>
						<label htmlFor='custom' className='tip-custom-label'>Custom</label>
					</div>
				</div>
			</div>

			<div className='label-group'>
				<div className='label-wrapper'>
					<label htmlFor='people' className='label'>Number of People</label>
					<p className='error'>
						{people === 0 ? 'Please enter at least 1' : ''}
					</p>
				</div>
				<div className='number-wrapper'>
					<input 
						type='number' 
						id='people' 
						className={`number-input ${people !== 0 &&  'error'}`}
						value={people}
						onInput={(e) => setPeople(+e.target.value)}
					/>
					<img src={personIcon} aria-hidden='true' className='icon' />
				</div>
			</div>
		</div>
	)
}

export default Form