import React, { useState, useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import LoginFormRes from './components/LoginFormRes';
import { Session } from '@heroiclabs/nakama-js';

import {
  //saveSessionToStorage,
  getSessionFromStorage,
  //removeSessionFromStorage
} from './utils/nakamaHelpers';

const App: React.FC = () => {

  const [sessionLocal, setSessionLocal] = useState<Session | null>(null);

  useEffect(() => {
    // On component mount, try to get the session from local storage
    const storedSession = getSessionFromStorage();
    if (storedSession) {
      setSessionLocal(JSON.parse(storedSession));
    }
  }, []);

  return (
    <div className="App">
      <h1>Nakama Login</h1>

      {sessionLocal ? (

        <LoginFormRes login={sessionLocal.username} user_id={sessionLocal.user_id} token={sessionLocal.token} />
      ) : (
        <LoginForm />
      )}


    </div>
  );
}

export default App;