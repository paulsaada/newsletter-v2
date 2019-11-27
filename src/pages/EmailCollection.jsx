import React, { Component } from 'react';
import EmailForm from '../containers/EmailForm';
import Privacy from '../containers/Privacy';
import Subtitle from '../components/Subtitle';

class EmailCollection extends Component {
   state = {}
   render() {
      return (
         <div>
            <Subtitle />
            <form>
               <EmailForm />
               <Privacy />
            </form>
         </div>
      );
   }
}

export default EmailCollection;