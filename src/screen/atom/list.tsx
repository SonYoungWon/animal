import React from 'react';
import {FlatListProp, ScrollListProp} from './listProp';
import {FlatList, ScrollView} from './styled';

export const VerticalFlatList = ({data, render}: FlatListProp) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      bounces={false}
      renderItem={({item, index}) => render(item, index)}
    />
  );
};

export const VerticalScrollList = ({children, style, defaultStyle}: ScrollListProp) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, ...style}}
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{...defaultStyle}}>
      {children}
    </ScrollView>
  );
};

export const HorizontalFlatList = ({data, render, style, defaultStyle}: FlatListProp) => {
  return (
    <FlatList
      data={data}
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1, paddingHorizontal: 16, ...style}}
      style={{...defaultStyle}}
      renderItem={({item, index}) => render(item, index)}
    />
  );
};

export const HorizontalScrollList = ({children, style, defaultStyle}: ScrollListProp) => {
  return (
    <ScrollView
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1, paddingHorizontal: 16, ...style}}
      style={{...defaultStyle}}>
      {children}
    </ScrollView>
  );
};
