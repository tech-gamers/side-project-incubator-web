import React, { Component } from 'react';

class ErrorBoundary extends Component<any, {hasError: boolean, error: Error | null}> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false, error: null};
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true, error};
  }

  componentDidCatch(error: any) {
    console.error(error);
  }

  render() {
    const { error, hasError } = this.state;

    if (hasError) {
      return (
        <div style={{textAlign: 'center'}}>
          <h1>{error?.message || 'Unknown Error'}</h1>
          <h2>Oops，网站崩溃了！不如杀个产品祭天吧</h2>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;