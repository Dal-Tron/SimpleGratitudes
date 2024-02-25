import { withRouter } from 'next/router';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information
    console.log({ error, errorInfo });
  }

  render() {
    const { router } = this.props;

    if (this.state.hasError) {
      this.setState({
        hasError: false,
      });

      router.push('/');
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
