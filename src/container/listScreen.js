import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class ListScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: null,
  };

  routeTo = () => {
    this.props.navigation.navigate('Detail');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List Screen</Text>
        <TouchableOpacity onPress={this.routeTo}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
