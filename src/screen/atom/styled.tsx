import FastImage from 'react-native-fast-image';
import VideoComponent from 'react-native-video';
import styled from 'styled-components/native';
import {screenHeight, screenWidth} from '../../common/utill';
import {COLOR} from '../types';

// Styled View
export const View = styled.View``;
export const FlexView = styled.View`
  flex: 1;
`;
export const AlignView = styled.View`
  align-items: center;
  justify-content: center;
`;
export const FlexAlignView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const FlexRowView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const BorderLine = styled.View`
  border-top-width: 1px;
  border-top-color: ${COLOR.GRAY_400};
`;

export const ZIndexView = styled.View<{zIndex?: number}>`
  z-index: ${(prop) => (prop.zIndex ? prop.zIndex : 100)};
`;

export const FullScreenView = styled.View`
  postion: absolute;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
`;

export const AbsoluteView = styled.View`
  position: absolute;
`;

export const ImageBackground = styled.ImageBackground``;

export const Video = styled(VideoComponent)<{width?: number; height?: number}>`
  width: ${(prop) => (prop.width ? prop.width : screenWidth)}px;
  height: ${(prop) => (prop.height ? prop.height : screenHeight)}px;
`;

export const RadiusView = styled.View<{radius?: number}>`
  border-radius: ${(prop) => (prop.radius ? prop.radius : 100)}px;
  over-flow: hidden;
`;
export const RadiusButtonView = styled.View<{radius?: number}>`
  border-radius: ${(prop) => (prop.radius ? prop.radius : 4)}px;
  over-flow: hidden;
`;
export const VerticalPadding = styled.View<{value?: number}>`
  padding-vertical: ${(prop) => (prop.value ? prop.value : 16)}px;
`;
export const HorizontalPadding = styled.View<{value?: number}>`
  padding-horizontal: ${(prop) => (prop.value ? prop.value : 16)}px;
`;

export const VerticalMargin = styled.View<{value?: number}>`
  margin-vertical: ${(prop) => (prop.value ? prop.value : 16)}px;
`;
export const HorizontalMargin = styled.View<{value?: number}>`
  margin-horizontal: ${(prop) => (prop.value ? prop.value : 16)}px;
`;
export const BottomMargin = styled.View<{value?: number}>`
  margin-bottom: ${(prop) => (prop.value ? prop.value : 42)}px;
`;

// Styled Pressable
export const Pressable = styled.Pressable``;
export const FlexPressable = styled.Pressable`
  flex: 1;
`;
export const CirclePressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

// Styled ScrollView
export const ScrollView = styled.ScrollView`
  flex-grow: 1;
`;

// Styled Text
export const Text = styled.Text``;
// font-family: NanumDongHwaDdoBag;

export const TextInput = styled.TextInput``;

// Styled FlatList
export const FlatList = styled.FlatList``;

// Styled Image(FastImage)
export const Image = styled(FastImage)``;
