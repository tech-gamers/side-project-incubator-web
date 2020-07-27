import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { CSRFTracker } from 'app/utils';

export default (api: CSRFTracker): string => {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    if (api.csrfToken === '') {
      api.handshake().then(setCsrfToken);
    } else {
      setCsrfToken(api.csrfToken);
    }
  }, [api, api.csrfToken]);

  return csrfToken;
};
