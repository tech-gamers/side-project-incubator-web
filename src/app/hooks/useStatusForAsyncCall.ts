import { useState } from 'react';

enum Status {
  IDLE = 0,
  BUSY,
  COMPLETED
}

class StatusState {
  status: Status;

  constructor(status: Status) {
    this.status = status;
  }

  isIdle() {
    return this.status === Status.IDLE;
  }

  isBusy() {
    return this.status === Status.BUSY;
  }

  isCompleted() {
    return this.status === Status.COMPLETED;
  }
}

export default <T>(call: () => Promise<T>): [StatusState, () => Promise<T>] => {
  const [status, setStatus] = useState(new StatusState(Status.IDLE));

  const wrappedCall = async () => {
    setStatus(new StatusState(Status.BUSY));

    const callResult = await call();
    setStatus(new StatusState(Status.COMPLETED));
    return callResult;
  };
  return [status, wrappedCall];
};
