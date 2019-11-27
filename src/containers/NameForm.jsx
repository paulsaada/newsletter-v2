import React, { Component } from 'react';
import NameField from '../components/NameField';
import SubmitButton from '../components/SubmitButton';

class NameForm extends Component {
   state = {}
   render() {
      const { values, handleChange } = this.props;
      return (
         <div className="flex--container">
            <NameField
               placeholder="First Name"
               values={ values }
               handleChange={ handleChange }
            />
            <NameField
               placeholder="Last Name"
               values={ values }
               handleChange={ handleChange }
            />
            <SubmitButton text="SIGN UP" />
         </div>
      );
   }
}

export default NameForm;