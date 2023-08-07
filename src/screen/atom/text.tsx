import {useState} from 'react';
import {Keyboard, Pressable} from 'react-native';
import {SVG} from '../svgs';
import {COLOR} from '../types';
import {RowView, Text as TextComponent, TextInput as TextInputComponent, View} from './styled';
import {BasicTextProp, TextInputProp} from './textProp';
import {
  defaultTextStyle,
  multiInputStyles,
  searchBarContainerStyle,
  searchBarStyles,
  textInputBorderBottomStyles,
  textInputStyles,
} from './textStyle';
import {Svg} from './view';

export const Text = ({text, leftIcon, rightIcon, iconPadding = 3, style}: BasicTextProp) => {
  return (
    <RowView>
      {leftIcon && <View style={{paddingRight: iconPadding}}>{leftIcon}</View>}
      <TextComponent style={{...defaultTextStyle(style)}}>{text}</TextComponent>
      {rightIcon && <View style={{paddingLeft: iconPadding}}>{rightIcon}</View>}
    </RowView>
  );
};

export const TextInput = ({
  placeholder = '내용을 입력해주세요.',
  searchText,
  isActive,
  isBorderBottom,
  editable = true,
  textAlign = 'left',
  setSearchText,
  blurEvent,
}: TextInputProp) => {
  return (
    <TextInputComponent
      placeholder={placeholder}
      style={
        isBorderBottom
          ? {...textInputStyles, ...textInputBorderBottomStyles(isActive), textAlign}
          : {...textInputStyles, textAlign}
      }
      defaultValue={searchText.toString()}
      maxLength={10}
      editable={editable}
      placeholderTextColor={'#dedede'}
      onChangeText={(t: string) => (setSearchText ? setSearchText(t) : console.log)}
      onBlur={blurEvent}
    />
  );
};

export const MuliInput = ({placeholder = '내용을 입력해주세요.', searchText, setSearchText}: TextInputProp) => {
  return (
    <TextInputComponent
      placeholder={placeholder}
      multiline={true}
      placeholderTextColor={'#bbb'}
      onChangeText={(t) => (setSearchText ? setSearchText(t) : console.log)}
      defaultValue={searchText.toString()}
      maxLength={100}
      style={{...multiInputStyles, textAlignVertical: 'top'}}
    />
  );
};

export const SearchBar = ({
  placeholder = '검색어를 입력해주세요.',
  searchText,
  setSearchText,
  focusEvent,
  blurEvent,
  cancelEvent,
}: TextInputProp) => {
  const [text, setText] = useState(searchText);
  const [active, setActive] = useState(false);

  const onCancel = () => {
    setText('');
    setSearchText('');
    setActive(false);
    Keyboard.dismiss();
    if (cancelEvent) {
      cancelEvent();
    }
  };

  const onFocus = () => {
    if (focusEvent) {
      focusEvent();
    }
    setActive(true);
  };

  return (
    <RowView style={searchBarContainerStyle(active)}>
      <TextInputComponent
        placeholder={placeholder}
        placeholderTextColor={COLOR.GRAY_400}
        value={text.toString()}
        style={{...searchBarStyles, fontWeight: 'bold'}}
        onChangeText={(t) => setText(t)}
        onFocus={onFocus}
        onBlur={blurEvent}
        onSubmitEditing={() => setSearchText(text)}
      />
      {active && (
        <Pressable style={{paddingHorizontal: 4}} onPress={onCancel}>
          <Svg Image={SVG.ClearIcon} size={17} />
        </Pressable>
      )}
      <Pressable style={{paddingHorizontal: 4}} onPress={() => setSearchText(text)}>
        <Svg Image={active ? SVG.SearchSvg : SVG.SearchGrayIcon} size={28} />
      </Pressable>
    </RowView>
  );
};
