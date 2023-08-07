import {Platform, ViewStyle} from 'react-native';
import {brandColor} from '../styled';
import {COLOR, WEIGHT} from '../types';
import {TextIconStyleProp, TextStyleProp} from './textProp';

export const defaultTextStyle = (style: TextStyleProp | undefined) => {
  let plusSize = 0;
  if (Platform.OS === 'ios') plusSize += 2;
  if (style) {
    const {
      fontWeight = WEIGHT.REGULAR,
      color = COLOR.BLACK,
      letterSpacing = -0.42,
      lineHeight,
      fontSize = 14,
      textAlign,
    } = style;
    let fontStyles: any = {
      fontWeight: fontWeight,
      color: color,
      letterSpacing,
      lineHeight,
      fontSize: fontSize + plusSize,
      textAlign,
    };
    return fontStyles;
  } else {
    return {
      fontWeight: WEIGHT.REGULAR,
      color: COLOR.BLACK,
      letterSpacing: -0.42,
      lineHeight: undefined,
      fontSize: 14 + plusSize,
      textAlign: 'left',
    };
  }
};

export const defaultTextIconStyle = (style: TextIconStyleProp | undefined) => {
  let plusSize = 0;
  if (Platform.OS === 'ios') plusSize += 2;
  if (style) {
    const {size = 16} = style;
    return {
      width: size + plusSize,
      height: size + plusSize,
    };
  } else {
    return {
      width: 16 + plusSize,
      height: 16 + plusSize,
    };
  }
};

export const searchBarContainerStyle = (active: boolean) => {
  return {
    borderBottomWidth: 4,
    borderColor: active ? brandColor : COLOR.GRAY_500,
    marginHorizontal: 16,
    paddingVertical: 5,
  };
};

export const searchBarStyles = {
  flex: 1,
  elevation: 0,
  paddingHorizontal: 0,
  paddingBottom: 2,
  fontSize: 21,
  color: COLOR.BLACK,
};

export const textInputStyles: any = {
  color: COLOR.BLACK,
  fontWeight: WEIGHT.BOLD,
  fontSize: 19,
};

export const textInputBorderBottomStyles = (isActive: boolean = false): ViewStyle => {
  return {
    borderBottomWidth: 2,
    borderBottomColor: isActive ? COLOR.GRAY_600 : brandColor,
    paddingBottom: 9,
  };
};

export const multiInputStyles = {
  color: COLOR.BLACK,
  fontSize: 16,
};
