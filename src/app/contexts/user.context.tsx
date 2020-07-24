import React, { createContext, useState } from 'react';

export const userContext = createContext({} as any);

export default function UserContextProvider(props: any) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar_url: undefined
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
}
