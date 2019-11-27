import React, { Component } from 'react';
import Subtitle from '../components/Subtitle';

class CongratsUser extends Component {
   state = {}
   render() {
      return (
         <div>
            <Subtitle text="THANK YOU FOR SIGNING UP!" />
            <p className="congrats--text">
               Look out for the latest news in web development
            </p>
         </div>
      );
   }
}

export default CongratsUser;