import React, {Component} from 'react';

// new component
class ComponentsIntro extends Component{
	render(){
		return(

			<div>
				<ul>
					<li>Components split tthe UI into independent, and reusable pieces</li>
					<li>Allow for the isolation of each piece</li>
					<li>There is a component lifecycle -discussed</li>
					<li>All custom components(by convention not acual rule) should start with capital letters</li>
				</ul>
				<hr/>
			</div>

		)
	}
}

export default ComponentsIntro;