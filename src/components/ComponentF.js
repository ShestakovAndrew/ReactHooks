import React from 'react';
import {UserContext, ChannelContext} from "../App";

function ComponentF() {
	return (
		<UserContext.Consumer>
			{user => {
				return (
					<ChannelContext.Consumer>
						{channel => {
							return (
								<div>
									User context value {user}, {channel}
								</div>
							)
						}}
					</ChannelContext.Consumer>
				)
			}}
		</UserContext.Consumer>
	)
}

export default ComponentF