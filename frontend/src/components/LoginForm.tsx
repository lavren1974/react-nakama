// src/LoginForm.tsx
import React, { useState } from 'react';
import { Client, DefaultSocket, Session } from '@heroiclabs/nakama-js';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {

    let useSSL = false; // Enable if server is run with an SSL certificate.
    const client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
    //const client = new Client('http', 'localhost', '7350', 'defaultkey');
    //const socket = new DefaultSocket(5000, 5000, false);
    //client.useSocket(socket);

    try {
      const session: Session = await client.authenticateEmail(email, password);
      console.log('Logged in successfully:', session);
      // Navigate to another component or save session as required. 
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
