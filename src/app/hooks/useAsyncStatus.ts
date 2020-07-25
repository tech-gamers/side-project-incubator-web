import { useState } from 'react';

export type AsyncStatus = 'idle' | 'busy' | 'completed' | 'error';

export default <T>(call: () => Promise<T>): [AsyncStatus, () => Promise<T>] => {
  const [status, setStatus] = useState<AsyncStatus>('idle');
  const wrappedCall = async () => {
    try {
      setStatus('busy');
      const result = await call();
      setStatus('completed');
      return result;
    } catch (error) {
      setStatus('error');
      throw error;
    }
  };

  return [status, wrappedCall];
};
