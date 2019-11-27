import React, { Component } from 'react';
import EmailField from '../components/EmailField';
import SubmitButton from '../components/SubmitButton';

class EmailForm extends Component {
   state = {}
   render() {
      return (
         <div className="flex--container">
            <EmailField />
            <SubmitButton />
         </div>
      );
   }
}

export default EmailForm;