import { useEffect, useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
import './App.css'
import { Client, Session } from "@heroiclabs/nakama-js";
// import { ApiAccount } from "@heroiclabs/nakama-js/dist/api.gen";

export default function App() {



  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <Profile />
    </div>
  );
}


function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


function Profile() {

  const dataFetchedRef = useRef(false);

  useEffect(() => {

    // Чтобы отключить повторный рендеринг при монтировании
    // https://upmostly.com/tutorials/why-is-my-useeffect-hook-running-twice-in-react
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;


    let useSSL = false; // Enable if server is run with an SSL certificate.
    let client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
    let username = "lavren1974";
    let email = "name@example.com";
    let password = "12345678";
    let create = true;


    //let session = login(client, email, password, create, username);





    //const account = await client.getAccount(session);
    // console.log(session);



    //getAccount(email, password, create, username);
    getAccount2(email, password, create, username);

    // console.log(account);

    // var useSSL = false;
    // var client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);

    // client.authenticateCustom("test_id").then(session => {
    //   console.log(session);
    // })

  }, []);

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


async function login(client: Client, email: string, password: string, create: boolean, username: string) {
  // const session = client.authenticateEmail(email, password);

  let session = await client.authenticateEmail(email, password, create, username);

  // Save the session token for future API calls
  //localStorage.setItem("sessionToken", session.token);

  return session;
}

async function getAccount(email: string, password: string, create: boolean, username: string) {
  // const session = client.authenticateEmail(email, password);

  let useSSL = false; // Enable if server is run with an SSL certificate.
  let client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
  let session = await client.authenticateEmail(email, password, create, username);
  let account = await client.getAccount(session);

  // Save the session token for future API calls
  //localStorage.setItem("sessionToken", session.token);
  console.log(account);
  //return account.email;

  console.info(session.token); // raw JWT token
  console.info(session.user_id);
  console.info(session.username);
  console.info("Session has expired?", session.isexpired(Date.now() / 1000));
  // const expiresat = session.expires_at;
  // console.warn("Session will expire at", new Date(expiresat * 1000).toISOString());


  // Assume we've stored the auth token in browser Web Storage.
  // const authtoken = window.localStorage.getItem("nkauthtoken");
  // const session2 = session.refresh_token(authtoken);
  // if (session.isexpired(Date.now() / 1000)) {
  //     console.warn("Session has expired. Must reauthenticate.");
  // }

}


async function getAccount2(email: string, password: string, create: boolean, username: string) {

  let useSSL = false; // Enable if server is run with an SSL certificate.
  let client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
  let session = await client.authenticateEmail(email, password, create, username);
  //let account = await client.getAccount(session);

  const account = await client.getAccount(session);
  console.info(account.user?.id);
  console.info(account.user?.username);
  console.info(account.wallet);



}

// const getAccount2=async(session:any)=>{
//   try{let client =new Client(HTTP_KEY,END_POINT,PORT);
//   client.useSSL=true;
//   client.timeout = 10;
//   const account=await client.getAccount(session);
//   console.log(account)}
//   catch(err){
//     console.log("err at getAccount",err)
//   }
// }
// async function Profile() {



//   // let useSSL = false; // Enable if server is run with an SSL certificate.
//   // let client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
//   // let username = "lnn1974";
//   // let email = "lnn1974@gmail.com";
//   // let password = "12345678";
//   // let create = true;

//   //let session = await client.authenticateEmail(email, password);
//   //let session = await client.authenticateEmail(email, password, create, username);

//   // authenticate a user
//   // const session: Session = await client.authenticateEmail(email, password, create, username);
//   //const session = client.authenticateEmail(email, password);

//   //Обновление сеанса
//   //session = await client.sessionRefresh(session);

//   //Выход из сеанса
//   //await client.sessionLogout(session);

//   // console.log(session);

//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// async function login(email, password) {
//   const session = await client.authenticateEmail(email, password, "MyApp");

//   // Save the session token for future API calls
//   localStorage.setItem("sessionToken", session.token);

//   return session;
// }

// function logout() {
//   localStorage.removeItem("sessionToken");
// }

// async function getProfile() {
//   const sessionToken = localStorage.getItem("sessionToken");

//   if (!sessionToken) {
//     throw new Error("Not authenticated");
//   }

//   const response = await client.rpcFunc(sessionToken, "get_profile", {});

//   return response.payload;
// }