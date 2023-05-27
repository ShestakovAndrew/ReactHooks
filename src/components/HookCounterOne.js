import React, {useState, useEffect} from 'react'

function HookCounterOne() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = `Ты нажал ${count} раз`
	})

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>
				Нажал {count} раз
			</button>
		</div>
	);
}

export default HookCounterOne;