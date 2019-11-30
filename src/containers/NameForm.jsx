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
               type="firstName"
               id="firstName"
               name="firstName"
               handleChange={ handleChange('firstName') }
               values={ values.firstName }
            />
            <NameField
               placeholder="Last Name"
               type="lastName"
               id="lastName"
               name="lastName"
               handleChange={ handleChange('lastName') }
               values={ values.lastName }
            />
            <SubmitButton text="SIGN UP" />
         </div>
      );
   }
}

export default NameForm;