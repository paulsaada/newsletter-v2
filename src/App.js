import React from 'react';
import SubmitButton from './components/SubmitButton';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import EmailField from './components/EmailField';
import NameField from './components/NameField';
import Checkbox from './components/Checkbox';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle />
      <EmailField />
      <NameField />
      <Checkbox />
      <SubmitButton />
    </div>
  );
}

export default App;
