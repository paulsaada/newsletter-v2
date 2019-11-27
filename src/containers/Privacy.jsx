import React, { Component } from 'react';
import Checkbox from '../components/Checkbox';
import UserAgreement from '../components/UserAgreement';

class Privacy extends Component {
   state = {}
   render() {
      return (
         <div className="flex--container">
            <Checkbox />
            <UserAgreement />
         </div>
      );
   }
}

export default Privacy;