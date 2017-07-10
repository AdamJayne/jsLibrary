import React, {Component} from 'react';

class PropsIntro extends Component{
	render(){             // this. is referring to the component
		console.log(this.props);
		return(
			<div>
				<h3>Props Intro</h3>
				<p>Components accept inputs called 'props and return React elements describing what should appear on the screen. To access</p>
				<h3>Example of using props</h3>
				<p>Artist: {this.props.name}</p>
				<p>Song: {this.props.title}</p>
				<hr/>
			</div>


		)
	}
}
export default PropsIntro;