import { useState } from 'react';

export default <T>(call: () => Promise<T>): [boolean, () => Promise<T>] => {
  const [status, setStatus] = useState(false);

  const wrappedCall = async () => {
    setStatus(true);

    const callResult = await call();
    setStatus(false);
    return callResult;
  };
  return [status, wrappedCall];
};
