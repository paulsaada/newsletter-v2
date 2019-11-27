import React, { Component } from 'react';
import Checkbox from '../components/Checkbox';
import UserAgreement from '../components/UserAgreement';
import '../stylesheets/Privacy.css'

class Privacy extends Component {
   state = {}
   render() {
      return (
         <div className="flex--container privacy--container">
            <Checkbox />
            <UserAgreement />
         </div>
      );
   }
}

export default Privacy;