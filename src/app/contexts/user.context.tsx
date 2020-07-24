import React, { createContext, useState } from 'react';

export const UserContext = createContext({} as any);

export default function UserContextProvider(props: any) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar_url: undefined
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
