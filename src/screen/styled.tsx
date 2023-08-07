import {Dimensions, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {deviceInfo} from '../common/utill';
import {COLOR, WEIGHT} from './types';

export const navigationHeaderHeight = 50;
export const tabHeight = 43;

export const horizontalPadding = 16;

export enum fontColor {
  black = '#191919', // ex) 기본
  gray = '#dbdbdb', // ex) 비밀번호 찾기
  lightGray = '#ededed',
  blue = '#0099ff', // ex) 하이퍼링크
  white = '#ffffff', // ex) 하이퍼링크
}

export const brandColor = '#4CD964';
export const borderColor = '#e5e5ea';
export const splitColor = '#f5f8ff';
export const errorColor = '#ff3120';
export const kakaoColor = '#f9e000';
export enum socialColor {
  kakao = '#f9e000',
  naver = '#03c75a',
  google = '#fff',
  apple = '#000',
}

export const bgColor = {
  deepWhite: '#191919',
  lightWhite: '#f8f8fa',
};
export const lineColor = {
  black: '#191919',
  gray: '#dbdbdb',
  lightGray: '#ededed',
};
export const lineWidth = 0.5;

export enum iconBackgroundColor {
  gray = '#e5e5ea',
}

export const fontFamily = {
  korean: 'Notosans',
};

export const fontSize = {
  size1: 12,
  size2: 14,
  size3: 16,
  size4: 18,
  size5: 20,
  size6: 22,
  size7: 24,
  size8: 26,
  size9: 28,
  size10: 30,
  size11: 32,
  size12: 34,
  size13: 36,
  size14: 38,
};

export const iconSize1 = 28;
export const iconSize2 = 24;
export const iconSmallSize = 12;

export const borderBold = 3;

export const headerIconSize = 28;

export const backgroundImageHeight = 367;

export const maxSnapPoint =
  Platform.OS === 'ios'
    ? isIphoneX()
      ? Dimensions.get('window').height - 70
      : Dimensions.get('window').height - 70
    : Dimensions.get('window').height - 70;

export const textStyled = ({
  size = 14,
  weight = WEIGHT.REGULAR,
  color = COLOR.BLACK,
  spacing = -0.7,
  height,
}: {
  size?: number;
  weight?: string;
  color?: string;
  spacing?: number;
  height?: number;
}) => {
  return `
    font-size: ${size}px;
    font-weight: ${weight};
    letter-spacing: ${spacing}px;
    color: ${color};
    ${height && `line-height: ${height}px`};
  `;
};

export const snapPointType = {
  itemOne: deviceInfo === 'iPhone15,2' || deviceInfo === 'iPhone15,3' ? 230 : isIphoneX() ? 270 : 260,
  itemTwo: deviceInfo === 'iPhone15,2' || deviceInfo === 'iPhone15,3' ? 260 : isIphoneX() ? 300 : 290,
  itemThree: deviceInfo === 'iPhone15,2' || deviceInfo === 'iPhone15,3' ? 290 : isIphoneX() ? 330 : 320,
  itemFour: deviceInfo === 'iPhone15,2' || deviceInfo === 'iPhone15,3' ? 320 : isIphoneX() ? 360 : 350,
  itemFive: deviceInfo === 'iPhone15,2' || deviceInfo === 'iPhone15,3' ? 350 : isIphoneX() ? 390 : 380,
};
