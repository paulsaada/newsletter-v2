import React from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import EmailForm from './containers/EmailForm';
import NameField from './components/NameField';
import Privacy from './containers/Privacy';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle />
      <EmailForm />
      <NameField />
      <Privacy />
    </div>
  );
}

export default App;
