import React from 'react';
import SubmitButton from './components/SubmitButton';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import EmailField from './components/EmailField';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle />
      <EmailField />
      <SubmitButton />
    </div>
  );
}

export default App;
