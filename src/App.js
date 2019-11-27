import React from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import EmailForm from './containers/EmailForm';
import NameField from './components/NameField';
import Checkbox from './components/Checkbox';
import UserAgreement from './components/UserAgreement';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle />
      <EmailForm />
      <NameField />
      <Checkbox />
      <UserAgreement />
    </div>
  );
}

export default App;
