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
  };

  render() {
    const { step } = this.state;
    const { email, firstName, lastName } = this.state;
    const values = { email, firstName, lastName };

    switch (step) {
      case 1:
        return (
          <div className="app--container center">
            <Title />
            <EmailCollection
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          </div>
        )
      case 2:
        return (
          <div className="app--container center">
            <Title />
            <NameCollection
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          </div>
        )
      case 3:
        return (
          <div className="app--container center">
            <Title text="congratulations!" />
            <CongratsUser />
          </div>
        )
      default:
    }
  }
}

export default App;
