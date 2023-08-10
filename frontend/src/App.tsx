import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Nakama Login</h1>
      <LoginForm />
    </div>
  );
}

export default App;