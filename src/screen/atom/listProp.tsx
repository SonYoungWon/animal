import {ViewStyle} from 'react-native';

export interface FlatListProp {
  data: any[];
  render: (item: any, index: number) => JSX.Element;
  style?: ViewStyle;
  defaultStyle?: ViewStyle;
}

export interface ScrollListProp {
  children: JSX.Element;
  style?: ViewStyle;
  defaultStyle?: ViewStyle;
}
