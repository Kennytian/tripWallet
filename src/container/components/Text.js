import React, { PureComponent } from 'react';
import { Text } from 'react-native';

export default class KTText extends PureComponent {
  render() {
    const { ...props } = this.props;
    return (
      <Text selectable={false} allowFontScaling={false} {...props} />
    );
  }
}
