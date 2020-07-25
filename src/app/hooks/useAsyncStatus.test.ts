import { renderHook, act } from '@testing-library/react-hooks';
import useAsyncCallStatus from './useAsyncCallStatus';

const CALL_PERIOD = 500;
const SHORTER_PERIOD = 100;
const LONGER_PERIOD = 700;

const ASYNC_CALL_RETURN = 'ASYNC_CALL_RETURN_VALUE';

const asyncCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ASYNC_CALL_RETURN);
    }, CALL_PERIOD);
  });

const ASYNC_ERROR = new Error('Error');

const errorAsyncCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      throw ASYNC_ERROR;
    }, CALL_PERIOD);
  });

describe('useStatusForAsyncCall', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('sets initial status to idle', () => {
    const { result } = renderHook(() => useAsyncCallStatus(asyncCall));
    const [status, wrappedCall] = result.current;

    expect(status).toBe('idle');
  });

  it('sets state to busy during the call', () => {
    const { result } = renderHook(() => useAsyncCallStatus(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall();
      setTimeout(() => {
        expect(status).toBe('busy');
      }, SHORTER_PERIOD);
    });
  });

  it('sets state to completed after the call', () => {
    const { result } = renderHook(() => useAsyncCallStatus(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall();

      setTimeout(() => {
        expect(status).toBe('completed');
      }, LONGER_PERIOD);
    });
  });

  it('sets state to error after the call', () => {
    const { result } = renderHook(() => useAsyncCallStatus(errorAsyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall();

      setTimeout(() => {
        expect(status).toBe('error');
      }, LONGER_PERIOD);
    });
  });

  it('resolves to the same value as original call', () => {
    const { result } = renderHook(() => useAsyncCallStatus(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall().then((res) => {
        expect(res).toBe(ASYNC_CALL_RETURN);
      });
    });
  });

  it('throws same error as original call', () => {
    const { result } = renderHook(() => useAsyncCallStatus(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall().catch((err) => {
        expect(err).toEqual(ASYNC_ERROR);
      });
    });
  });
});
