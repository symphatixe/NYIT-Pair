import '@component/styles/globals.css'
import React, { useState } from 'react';
import { ActiveUserContext, dummyUser } from '../src/ActiveUserContext'


export default function App({ Component, pageProps }) {
  const [loggedUser, setLoggedUser] = useState(dummyUser);

  return (
    <ActiveUserContext.Provider value = {{loggedUser, setLoggedUser}}>
    <Component {...pageProps} />
    </ActiveUserContext.Provider>
  );
}