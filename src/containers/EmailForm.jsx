import React, { Component } from 'react';
import EmailField from '../components/EmailField';
import SubmitButton from '../components/SubmitButton';

class EmailForm extends Component {
   state = {}

   render() {
      const { values, handleChange } = this.props;
      return (
         <div className="flex--container">
            <EmailField
               handleChange={ handleChange }
               values={ values }
            />
            <SubmitButton />
         </div>
      );
   }
}

export default EmailForm;