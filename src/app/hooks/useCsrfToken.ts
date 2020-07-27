import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { CSRFTracker } from 'app/utils';

export default (api: CSRFTracker): string => {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    api.handshake().then(setCsrfToken);
  }, [api, api.csrfToken]);

  return csrfToken;
};
