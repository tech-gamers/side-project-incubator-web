import { renderHook, act } from '@testing-library/react-hooks';
import useStatusForAsyncCall from './useStatusForAsyncCall';

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

describe('useStatusForAsyncCall', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('sets initial status to false', () => {
    const { result } = renderHook(() => useStatusForAsyncCall(asyncCall));
    const [status, wrappedCall] = result.current;

    expect(status).toBe(false);
  });

  it('sets state to true during the call', () => {
    const { result } = renderHook(() => useStatusForAsyncCall(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall();
      setTimeout(() => {
        expect(status).toBe(true);
      }, SHORTER_PERIOD);
    });
  });

  it('sets state to false after the call', () => {
    const { result } = renderHook(() => useStatusForAsyncCall(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall();

      setTimeout(() => {
        expect(status).toBe(false);
      }, LONGER_PERIOD);
    });
  });

  it('resolves to the same value as original call', () => {
    const { result } = renderHook(() => useStatusForAsyncCall(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall().then((res) => {
        expect(res).toBe(ASYNC_CALL_RETURN);
      });
    });
  });
});
