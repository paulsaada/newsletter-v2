import React, { Component } from 'react';
import '../stylesheets/SubmitButton.css'

class SubmitButton extends Component {
   state = {}

   static defaultProps = {
      text: "NEXT"
   }

   render() {
      return (
         <div>
            <button className="button">{ this.props.text }</button>
         </div>
      );
   }
}

export default SubmitButton;