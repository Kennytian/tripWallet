/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

export default class KTTextInput extends PureComponent {
  render() {
    const { ...props } = this.props;
    return (<TextInput
      autoCapitalize="none"
      autoCorrect={false}
      clearButtonMode="while-editing"
      underlineColorAndroid="transparent"
      allowFontScaling={false}
      selectable={false}
      {...props}
    />);
  }
}
