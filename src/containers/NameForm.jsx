import React, { Component } from 'react';
import NameField from '../components/NameField';
import SubmitButton from '../components/SubmitButton';

class NameForm extends Component {
   state = {}
   render() {
      return (
         <div className="flex--container">
            <NameField placeholder="First Name" />
            <NameField placeholder="Last Name" />
            <SubmitButton text="SIGN UP" />
         </div>
      );
   }
}

export default NameForm;