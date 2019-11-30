import React from 'react';
import Title from './components/Title';
import CongratsUser from './containers/Congratulations';
import EmailCollection from './pages/EmailCollection';
import NameCollection from './pages/NameCollection';
import './stylesheets/App.css';

class App extends React.Component {
  state = {
    step: 1,
    email: '',
    firstName: '',
    lastName: ''
  }

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // handle change upon submit
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(e.target.value);
  };


  render() {
    const { step, email, firstName, lastName } = this.state;
    const values = { email, firstName, lastName };
    const nextStep = this.nextStep;
    const handleChange = this.handleChange;
    const formProps = { nextStep, handleChange, values };
    const containerStyles = "app--container center";

    switch (step) {
      case 1:
        return (
          <div className={ containerStyles }>
            <Title />
            <EmailCollection { ...formProps } />
          </div>
        )
      case 2:
        return (
          <div className={ containerStyles }>
            <Title />
            <NameCollection { ...formProps } />
          </div>
        )
      case 3:
        return (
          <div className={ containerStyles }>
            { console.log(values) }
            <Title text="congratulations!" />
            <CongratsUser />
          </div>
        )
      default:
    }
  }
}

export default App;
