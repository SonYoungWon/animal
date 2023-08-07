import React from 'react';
import {Keyboard} from 'react-native';
import {IDayComponentProps} from 'react-native-calendar-strip';
import {formatTime} from '../../common/function';
import {screenWidth} from '../../common/utill';
import {Avatar, BasicButton, CameraPicker} from '../atom/button';
import {
  AbsoluteView,
  BorderLine,
  BottomMargin,
  FlexAlignView,
  HorizontalPadding,
  Image,
  RadiusView,
  RowView,
  VerticalMargin,
  VerticalPadding,
  View,
} from '../atom/styled';
import {Text} from '../atom/text';
import {COLOR, TEXT_SIZE, WEIGHT} from '../types';

export const BottomButtonView = ({
  text,
  disabled = false,
  onPress,
}: {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}) => {
  return (
    <BottomMargin>
      <BorderLine />
      <VerticalPadding value={10} />
      <HorizontalPadding>
        <BasicButton
          text={text}
          type={'ON_OFF'}
          onOff={disabled ? 'OFF' : 'ON'}
          onPress={disabled ? Keyboard.dismiss : onPress}
        />
      </HorizontalPadding>
    </BottomMargin>
  );
};

export const ProfileImage = ({
  uri,
  editable = false,
  onPress,
}: {
  uri: string;
  editable?: boolean;
  onPress: () => void;
}) => {
  const size = screenWidth / 2;
  return (
    <View style={{width: size, height: size}}>
      <Image source={{uri}} style={{width: size, height: size, borderRadius: 100}} />
      <AbsoluteView style={{bottom: 0, right: 10}}>
        <CameraPicker onPress={onPress} />
      </AbsoluteView>
    </View>
  );
};

export const CalenderDay = ({day, isSelected = false}: {day: IDayComponentProps; isSelected?: boolean}) => {
  const currentDate = new Date(day.date.toISOString());
  const selectDay = new Date();
  const isSelect = formatTime(selectDay, 'YYYYMMDD') === formatTime(currentDate, 'YYYYMMDD');
  return (
    <FlexAlignView>
      <Text
        text={formatTime(currentDate, 'SIMPLE_WEEK')}
        style={{color: COLOR.WHITE, fontWeight: WEIGHT.MEDIUM, lineHeight: 26}}
      />
      <RadiusView radius={100} style={{width: 30, height: 30, backgroundColor: isSelect ? COLOR.YELLOW : COLOR.GREEN}}>
        <FlexAlignView>
          <Text text={currentDate.getDate().toString()} style={{color: COLOR.WHITE, fontWeight: WEIGHT.BOLD}} />
        </FlexAlignView>
      </RadiusView>
    </FlexAlignView>
  );
};

export const FeedHeader = ({uri, name}: {uri: string; name: string}) => {
  return (
    <VerticalMargin value={8}>
      <HorizontalPadding value={8}>
        <RowView>
          <Avatar uri={uri} size={'MEDIUM'} onPress={console.log} />
          <HorizontalPadding value={4} />
          <Text text={name} style={{fontSize: TEXT_SIZE.size3, fontWeight: WEIGHT.MEDIUM, color: COLOR.GRAY_900}} />
        </RowView>
      </HorizontalPadding>
    </VerticalMargin>
  );
};
