import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
import styles from './styles';
import I18n from '../../translations/i18n';
import TrackHoc from '../components/TrackHoc';
import iiHOC from '../components/IIHoc';

class Index extends PureComponent {
  static navigationOptions = props => ({
    headerRight: (
      <Button
        style={styles.headerRightButton}
        onPress={() => props.navigation.state.params.onClear()}
      >
        <Text>{I18n.t('clear')}</Text>
      </Button>
    ),
  });

  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: null,
  };

  constructor(props) {
    super(props);
    this.clearDataHandler();
  }

  state = {
    input1: '111',
    input2: '222',
  };

  componentDidMount() {

  }

  clearDataHandler() {
    this.props.navigation.setParams({
      onClear: () => {
        this.setState({
          input1: '',
          input2: '',
        });
      },
    });
  }

  routeTo = () => {
    this.props.navigation.navigate('Detail');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>List Screen</Text>
        <TouchableOpacity onPress={this.routeTo}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
        <TextInput style={styles.input1} value={this.state.input1} />
        <TextInput style={styles.input1} value={this.state.input2} />
      </View>
    );
  }
}

export default iiHOC(Index, 'ListIndex');
