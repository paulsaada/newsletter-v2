import React, { Component } from 'react';
import '../stylesheets/Subtitle.css'

class Subtitle extends Component {
   state = {}

   static defaultProps = {
      text: "SIGN UP FOR THE TLC NEWSLETTER"
   }
   render() {
      return (
         <div>
            <p className="subtitle">{ this.props.text }</p>
         </div>
      );
   }
}

export default Subtitle;