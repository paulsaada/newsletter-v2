import React, { Component } from 'react';
import '../stylesheets/Title.css'

class Title extends Component {
   state = {}

   static defaultProps = {
      text: "join the list"
   }
   render() {
      return (
         <div>
            <p className="title">{ this.props.text }</p>
         </div>
      );
   }
}

export default Title;