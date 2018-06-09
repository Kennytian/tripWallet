import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';

const hitSlop = {
  top: 4,
  right: 4,
  bottom: 4,
  left: 4,
};

export default class Button extends PureComponent {
  render() {
    return (
      <TouchableOpacity accessible activeOpacity={0.8} hitSlop={hitSlop} {...this.props} />
    );
  }
}
