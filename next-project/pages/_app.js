import '@component/styles/globals.css'
import { ActiveUserContext, dummyUser } from '../src/ActiveUserContext'
import React, { useState } from 'react';


export default function App({ Component, pageProps }) {
  const [loggedUser, setLoggedUser] = useState(dummyUser);

  return (
    <ActiveUserContext.Provider value = {{loggedUser, setLoggedUser}}>
    <Component {...pageProps} />
    </ActiveUserContext.Provider>
  );
}