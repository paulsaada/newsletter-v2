import React, { Component } from 'react';
import '../stylesheets/NameField.css';

class NameField extends Component {
	state = {};
	render() {
		const {
			values,
			handleChange,
			placeholder,
			type,
			id,
			name
		} = this.props;

		return (
			<div>
				<input
					className="input--field name--field"
					placeholder={ placeholder }
					required={ true }
					type={ type }
					id={ id }
					name={ name }
					values={ values }
					handleChange={ handleChange }
				/>
			</div>
		);
	}
}

export default NameField;
