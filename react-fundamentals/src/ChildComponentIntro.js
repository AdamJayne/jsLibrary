import React, {Component} from 'react';

class ChildComponentIntro extends Component{
	constructor(){
		// super is Component's constructor
		super();
		this.state={
			joke: "Kenny G"
		}
	}

	changeStateCustomMethod(event){
		this.setState({joke: event.target.value});
	}

	render(){
		return(
			<div>
				<h3>Child Components</h3>
				<p>Use the input field to see the state change.</p>
				<p>{this.state.joke} is the greatest saxophone player ever!</p>
				<ChildComponent updateProps={this.changeStateCustomMethod.bind(this)} />

			</div>
		)
	}
}

const ChildComponent = (props) => {
	return(
		<div>
			<input type='text' onChange={props.updateProps} />
			<button>Submit</button>
		</div>
	)
}

export default ChildComponentIntro;