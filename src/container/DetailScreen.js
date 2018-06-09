import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';

export default class DetailScreen extends PureComponent {
  // static propTypes = {
  //   navigation: PropTypes.object,
  // };
  //
  // static defaultProps = {
  //   navigation: null,
  // };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}
