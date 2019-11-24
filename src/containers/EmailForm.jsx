import React, { Component } from 'react';
import EmailField from '../components/EmailField';
import SubmitButton from '../components/SubmitButton';
import '../stylesheets/EmailForm.css';

class EmailForm extends Component {
   state = {}
   render() {
      return (
         <div>
            <EmailField />
            <SubmitButton />
         </div>
      );
   }
}

export default EmailForm;