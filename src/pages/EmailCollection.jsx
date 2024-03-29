import React, { Component } from 'react';
import EmailForm from '../containers/EmailForm';
import Privacy from '../containers/Privacy';
import Subtitle from '../components/Subtitle';

class EmailCollection extends Component {
   state = {}

   continue = e => {
      e.preventDefault();
      const { nextStep } = this.props;
      nextStep();
   };

   render() {
      const { values, handleChange, nextStep } = this.props;
      return (
         <div>
            <Subtitle />
            <form onSubmit={ this.continue }>
               <EmailForm
                  values={ values }
                  handleChange={ handleChange }
                  nextStep={ nextStep }
               />
            </form>
            <Privacy />
         </div>
      );
   }
}

export default EmailCollection;