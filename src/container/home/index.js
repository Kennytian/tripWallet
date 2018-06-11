import React, { PureComponent } from 'react';
import { AsyncStorage, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
// import wallet from 'trip-wallet';
import trans from '../../api/transactions';
import styles from './styles';
import imageSource from '../../const/imageSource';
import HomeButton from './components/HomeButton';
import I18n from '../../translations/i18n';

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

  routeTo = name => () => {
    this.props.navigation.navigate(name);
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={imageSource.home_cover}>
        <HomeButton
          text={I18n.t('createWallet')}
          style={styles.createButton}
          textStyle={styles.createText}
          onPress={this.routeTo('List')}
        />
        <HomeButton
          text={I18n.t('importWallet')}
          style={styles.importButton}
          textStyle={styles.importText}
          onPress={this.routeTo('Detail')}
        />
      </ImageBackground>
    );
  }
}
