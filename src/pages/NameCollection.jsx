import React, { Component } from 'react';
import NameForm from '../containers/NameForm';
import Privacy from '../containers/Privacy';
import Subtitle from '../components/Subtitle';

class NameCollection extends Component {
   state = {}

   continue = e => {
      e.preventDefault();
      const { nextStep } = this.props;
      nextStep();
   };

   render() {
      const { values, handleChange, nextStep } = this.props;
      const formProps = { nextStep, handleChange, values };
      const nextStage = this.continue;

      return (
         <div>
            <Subtitle
               text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME"
            />
            <form onSubmit={ nextStage }>
               <NameForm { ...formProps } />
               <Privacy />
            </form>
         </div>
      );
   }
}

export default NameCollection;