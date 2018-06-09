import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import styles from './styles';

export default class Index extends PureComponent {
  // static propTypes = {
  //   navigation: PropTypes.object,
  // };
  //
  // static defaultProps = {
  //   navigation: null,
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}
