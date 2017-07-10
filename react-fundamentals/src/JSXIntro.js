import React, { Component } from 'react';


//Extends = inheritence
// JSXIntro is now a component, but we replace the render() funciton in it
class JSXIntro extends Component {
	render(){
		return (
			<div>
				<h3>JSX</h3>
				<ul>
					<li>Stands for JavaScript Extensions</li>
					<li>Looks a lot like HTML, but it isn't</li>
					<li>Compiles down to pure JavaScript</li>
					<li>Easier than writing pure JS</li>
					<li>Makes code safe from injection attacks</li>
				</ul>
				<hr/>
			</div>
		);
	}
}

export default JSXIntro;