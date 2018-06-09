import React, { PureComponent } from 'react';
import { AsyncStorage, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
// import wallet from 'trip-wallet';
import trans from '../../api/transactions';
import styles from './styles';

export default class Index extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: null,
  };

  async componentDidMount() {
    await AsyncStorage.setItem('name', 'Jay');

    // wallet.setProvider('https://rinkeby.infura.io', 1000);
    // const balanceResult = await wallet.getBalance('0x3228f93390612218a7d55503a3bdd46c4fbd1fd3');
    // console.log('balanceResult:', balanceResult);

    const [err, result] = await trans.get();
    if (err) {
      __DEV__ && console.log(err);
    }
    console.log('result:', result);

    const nameResult = await AsyncStorage.getItem('name');
    console.log('nameResult:', nameResult);
  }

  routeTo = () => {
    this.props.navigation.navigate('List');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={this.routeTo}>
          <Text>Go to List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
