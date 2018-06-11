import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { DEVICE_WIDTH } from '../../../const/deviceConst';

const styles = {
  baseButton: {
    borderRadius: 3,
    width: DEVICE_WIDTH - 48,
    marginHorizontal: 24,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontSize: 16,
  },
};

export default class HomeButton extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
  };

  static defaultProps = {
    onPress: null,
    style: {},
    textStyle: {},
  };

  render() {
    const {
      text, onPress, style, textStyle,
    } = this.props;
    return (
      <Button onPress={onPress} style={[styles.baseButton, style]}>
        <Text style={[styles.baseText, textStyle]}>{text}</Text>
      </Button>
    );
  }
}
