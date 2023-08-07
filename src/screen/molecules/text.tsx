import React from 'react';
import {View} from '../atom/styled';
import {Text} from '../atom/text';
import {TextStyleProp} from '../atom/textProp';

export const MultiLineText = ({
  texts,
  textStyles,
  alignItems = 'flex-start',
}: {
  texts: string[];
  textStyles: TextStyleProp[];
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}) => {
  return (
    <View style={{alignItems}}>
      {texts.map((text, index) => (
        <Text key={`${new Date().getTime() + index}`} text={text} style={textStyles[index]} />
      ))}
    </View>
  );
};
