import '@component/styles/globals.css'
import { ActiveUserContext, dummyUser } from '../../public/ActiveUserContext.js'
import React, { useState, createContext } from 'react';
import { Provider as ActiveUserProvider } from 'react';


export default function App({ Component, pageProps }) {
  const [loggedUser, setLoggedUser] = useState(dummyUser);

  return (
    <ActiveUserContext.Provider value = {{loggedUser, setLoggedUser}}>
    <Component {...pageProps} />
    </ActiveUserContext.Provider>
  );
}