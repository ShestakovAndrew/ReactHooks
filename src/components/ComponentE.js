import React, {useContext} from 'react';
import ComponentF from "./ComponentF";
import {ChannelContext, UserContext} from "../App";

function ComponentE() {
	const user = useContext(UserContext)
	const chanel = useContext(ChannelContext)

	return (
		<div>
			{user} - {chanel}
			<ComponentF />
		</div>
	);
}

export default ComponentE;