// src/LoginForm.tsx
import React, { useState } from 'react';
import { Client, Session } from '@heroiclabs/nakama-js';
import LoginFormRes from './LoginFormRes';
// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
//   ThemeProvider,
// } from "@material-tailwind/react";
import "tailwindcss/tailwind.css";

const LoginForm: React.FC = () => {
  const [formTrue, setFormTrue] = useState<boolean>(true);
  const [login, setLogin] = useState<string | undefined>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user_id, setUserId] = useState<string | undefined>('');
  const [token, setToken] = useState<string | undefined>('');



  const handleLogin = async () => {

    let useSSL = false; // Enable if server is run with an SSL certificate.
    const client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
    //const client = new Client('http', 'localhost', '7350', 'defaultkey');
    //const socket = new DefaultSocket(5000, 5000, false);
    //client.useSocket(socket);

    try {
      let create = true
      const session: Session = await client.authenticateEmail(email, password, create, login);
      console.log('Logged in successfully:', session);

      setLogin(session.username);
      setUserId(session.user_id);
      setToken(session.token);
      // Navigate to another component or save session as required. 
      setFormTrue(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    // <div>
    //   <input 
    //     type="name" 
    //     placeholder="Name" 
    //     value={name} 
    //     onChange={(e) => setName(e.target.value)} 
    //   />
    //   <input 
    //     type="email" 
    //     placeholder="Email" 
    //     value={email} 
    //     onChange={(e) => setEmail(e.target.value)} 
    //   />
    //   <input 
    //     type="password" 
    //     placeholder="Password" 
    //     value={password} 
    //     onChange={(e) => setPassword(e.target.value)} 
    //   />
    //   <button onClick={handleLogin}>Login</button>
    // </div>
    <div>
      {formTrue ? (

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
              {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p> */}
            </div>
            {/* <form className="mt-8 space-y-6"> */}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  name
                </label>
                <input
                  // id="name"
                  name="login"
                  type="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Login"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  // id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  // id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>

            <div>
              <button
                onClick={handleLogin}
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                </span>
                Sign in
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>



      ) : (
        <LoginFormRes login={login} email={email} user_id={user_id} token={token} />
      )}

    </div>
  );
}

export default LoginForm;
