import React from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import EmailForm from './containers/EmailForm';
import NameForm from './containers/NameForm';
import Privacy from './containers/Privacy';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle />
      <EmailForm />
      <Privacy />
      <Subtitle text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME" />
      <NameForm />
      <Privacy />
    </div>
  );
}

export default App;
