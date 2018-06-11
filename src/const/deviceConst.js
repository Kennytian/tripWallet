import { Dimensions, Platform, StyleSheet } from 'react-native';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;

export const HAIRLINE_WIDTH = StyleSheet.hairlineWidth;

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
