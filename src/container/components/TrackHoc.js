import React, { PureComponent } from 'react';

export default function TrackHoc(WrappedComponent, pageName) {
  return class Logger extends PureComponent {
    componentDidMount() {
      console.log(`${pageName}-Logged.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
