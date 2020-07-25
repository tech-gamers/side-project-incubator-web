import { useState, useEffect } from 'react';
import { api } from 'app/utils';

export default (): [string, (v: string) => void] => {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    api.handshake().then(setCsrfToken);
  }, []);

  return [csrfToken, setCsrfToken];
};
