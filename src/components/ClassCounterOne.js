import React, {Component} from 'react';

class ClassCounterOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			name: ''
		}
	}

	componentDidMount() {
		document.title = `Нажат ${this.state.count} раз`
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count)
		{
			console.log('Обновление документа')
			document.title = `Нажат ${this.state.count} раз`
		}
	}

	render() {
		return (
			<div>
				<input type='text' value={this.state.name} onChange={event => {
					this.setState({name: event.target.value})
				}}/>
				<button onClick={() => this.setState({ count: this.state.count + 1})}>
					Нажал {this.state.count} раз
				</button>
			</div>
		);
	}
}

export default ClassCounterOne;