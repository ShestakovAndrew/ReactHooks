import React, {useEffect, useState} from 'react';
import axios from "axios";

function DataFetching() {
	const [post, setPost] = useState({})
	const [id, setID] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(res => {
				console.log(res)
				setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	return (
		<div>
			<input type='text' value={id} onChange={e => setID(e.target.value)}/>
			<button type='button' onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div>
			{/*<ul>
				{
					post.map(post => <li key={post.id}>{post.title}</li>)
				}
			</ul>*/}
		</div>
	)
}

export default DataFetching;