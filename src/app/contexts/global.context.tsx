import React from 'react';
import UserContextProvider from './user.context';

export default function GlobalContextProvider(props: any) {
  return (
    <UserContextProvider>
      {props.children}
    </UserContextProvider>
  )
}
