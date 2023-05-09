import { createContext  } from "react";
import { User } from '../server/backend'

const ActiveUserContext = createContext();
export {ActiveUserContext};
export const dummyUser = new User(0, 'admin', 'admin', 'admin', 0, 0, 'admin', 'admin', 'admin');