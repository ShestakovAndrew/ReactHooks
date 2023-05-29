import {useState} from 'react';

function useCounter(initialCounter = 0, value) {
	const [count, setCount] = useState(initialCounter)
	const increment = () => {
		setCount(prevCount => prevCount + value)
	}
	const decrement = () => {
		setCount(prevCount => prevCount - value)
	}
	const reset = () => {
		setCount(initialCounter)
	}

	return [count, increment, decrement, reset]
}

export default useCounter;