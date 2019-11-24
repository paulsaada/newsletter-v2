import React, { Component } from 'react';

class Checkbox extends Component {
   render() {
      return (
         <div>
            <input
               type="checkbox"
               required={true}
            />
         </div>
      );
   }
}

export default Checkbox;