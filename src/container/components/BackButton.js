import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import imageSource from '../../const/imageSource';
import Button from './Button';

const styles = {
  hitSlop: {
    top: 4,
    bottom: 4,
    right: 10,
    left: 10,
  },
  icon: {
    width: 8.35,
    height: 17.7,
    marginLeft: 15,
  },
};

export default class BackButton extends PureComponent {
  render() {
    const { ...props } = this.props;
    return (
      <Button hitSlop={styles.hitSlop} {...props}>
        <Image style={styles.icon} source={imageSource.icon_back_gray} />
      </Button>
    );
  }
}
