import React, { Component } from 'react';
import '../stylesheets/EmailField.css';

class EmailField extends Component {
   state = {}

   render() {
      const { values, handleChange } = this.props;
      return (
         <div>
            <input
               className="input--field email--field"
               placeholder="enter email address"
               required={ true }
               type="email"
               id="email"
               name="email"
               onChange={ handleChange('email') }
               inputValue={ values.email }
            />
         </div>
      );
   }
}

export default EmailField;