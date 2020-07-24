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

  it('sets initial status to idle', () => {
    const { result } = renderHook(() => useStatusForAsyncCall(asyncCall));
    const [status, wrappedCall] = result.current;

    expect(status.isIdle()).toBe(true);
  });

  it('sets state to busy during the call', () => {
    const { result } = renderHook(() => useStatusForAsyncCall(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall();
      setTimeout(() => {
        expect(status.isBusy()).toBe(true);
      }, SHORTER_PERIOD);
    });
  });

  it('sets state to completed after the call', () => {
    const { result } = renderHook(() => useStatusForAsyncCall(asyncCall));
    const [status, wrappedCall] = result.current;

    act(() => {
      wrappedCall();

      setTimeout(() => {
        expect(status.isCompleted()).toBe(true);
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
