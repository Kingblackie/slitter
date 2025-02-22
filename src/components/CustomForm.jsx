import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'

const CustomForm = ({ thing, setThing, handleSubmit }) => {
	return (
		<>
			<h1 className='text-3xl sm:text-6xl font-bold text-center'>What is your 'One Thing'?</h1>
			<form 
				className='flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 ring-offset-slate-200 dark:ring-offset-slate-800 bg-slate-200'
				onSubmit={handleSubmit}
			>
				<input 
					type="text" 
					placeholder='Enter One Thing'
					autoFocus
					maxLength={64}
					className='bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none tex-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full' 
					value={thing}
					onInput={(e) => setThing(e.target.value)}
				/>
				<button className='bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none focus:text-teal-600 hover:text-teal-600'>
					<ArrowRightCircleIcon className='h-12 w-12 pointer-events-none' />
				</button>
			</form>
		</>
	)
}

export default CustomForm