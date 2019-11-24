import React, { Component } from 'react';
import '../stylesheets/EmailField.css';

class EmailField extends Component {
   state = {}
   render() {
      return (
         <div>
            <input
               className="email--field"
               placeholder="enter email address"
               required={true}
               type="email"
               id="email"
               name="email"
            />
         </div>
      );
   }
}

export default EmailField;