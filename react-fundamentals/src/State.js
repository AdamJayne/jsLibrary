import React, {Component} from 'react';

class StateIntro extends Component {
	constructor() {
		super();
		this.state = {
			name: "WRLD",
			otherName: "Savant"
		}
	}

	changeNameOne(event) {
		this.setState({name: event.target.value});
	}

	changeNameTwo(event){
		this.setState({otherName: event.target.value});
	}

	render(){
		return (
			<div>
				<h3>State Intro</h3>
				<p>Use the impout field to change the state of this component</p>
				<input  type="text" onChange={this.changeNameOne.bind(this)} />
				<input type="text" onChange={this.changeNameTwo.bind(this)} />
				<p>{this.state.name} and {this.state.otherName} are the greatest musicians EVER!!!!</p>
				<hr />
			</div>
		)
	}
}

export default StateIntro;