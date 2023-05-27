import React, {useState, useEffect} from 'react'

function HookCounterOne() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')

	useEffect(() => {
		console.log('useEffect - обновился')
		document.title = `Ты нажал ${count} раз`
	}, [count])

	return (
		<div>
			<input type='text' value={name} onChange={event => setName(event.target.value)}/>
			<button onClick={() => setCount(count + 1)}>
				Нажал {count} раз
			</button>
		</div>
	);
}

export default HookCounterOne;