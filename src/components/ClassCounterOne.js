import React, {Component} from 'react';

class ClassCounterOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		document.title = `Нажат ${this.state.count} раз`
	}

	componentDidUpdate() {
		document.title = `Нажат ${this.state.count} раз`
	}

	render() {
		return (
			<div>
				<button onClick={() => this.setState({ count: this.state.count + 1})}>
					Нажал {this.state.count} раз
				</button>
			</div>
		);
	}
}

export default ClassCounterOne;