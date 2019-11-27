import React, { Component } from 'react';
import '../stylesheets/NameField.css';

class NameField extends Component {
	state = {};
	render() {
		return (
			<div>
				<input
					className="input--field name--field"
					placeholder={ this.props.placeholder }
					required={ true }
					type={ this.props.type }
					id={ this.props.id }
					name={ this.props.name }
				/>
			</div>
		);
	}
}

export default NameField;
