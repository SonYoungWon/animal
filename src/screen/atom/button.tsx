import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationProp} from '../../navigation/defaultNavigation';
import {brandColor, headerIconSize} from '../styled';
import {SVG} from '../svgs';
import {
  AVATAR_SIZE,
  BUTTON_BACKGROUND_COLOR,
  BUTTON_BORDER_COLOR,
  BUTTON_BORDER_WIDTH,
  BUTTON_SIZE,
  BUTTON_SVG_SIZE,
  BUTTON_TEXT_COLOR,
  BUTTON_TEXT_SIZE,
  COLOR,
  LIKE_ICON_SIZE,
  TEXT_SIZE,
  WEIGHT,
} from '../types';
import {AvatarProp, BasicButtonProp, HeaderProp, LikeButtonProp, ReplyButtonProp, TagProp} from './buttonProp';
import {CirclePressable, FlexAlignView, Image, Pressable, RadiusView, RowView} from './styled';
import {Text} from './text';
import {BasicTextProp} from './textProp';
import {Svg} from './view';

export const BasicButton = ({
  text,
  size = 'XLARGE',
  type = 'SOLID',
  status = 'ACTIVE',
  onOff = 'ON',
  isRed = false,
  icon,
  onPress,
}: BasicButtonProp) => {
  const backgroundColor: any = isRed ? COLOR.RED : BUTTON_BACKGROUND_COLOR[type][status][onOff];
  const borderWidth: any = BUTTON_BORDER_WIDTH[type][status][onOff];
  const borderColor: any = BUTTON_BORDER_COLOR[type][status][onOff];
  const fontSize: any = BUTTON_TEXT_SIZE[size];
  const color: any = BUTTON_TEXT_COLOR[type][status][onOff];
  const svgSize: any = BUTTON_SVG_SIZE[size];

  return (
    <Pressable style={{...BUTTON_SIZE[size], backgroundColor, borderWidth, borderColor}} onPress={onPress}>
      <FlexAlignView>
        <Text text={text} leftIcon={icon && <Svg Image={icon} size={svgSize} />} style={{fontSize, color}} />
      </FlexAlignView>
    </Pressable>
  );
};

export const LikeToggleButton = ({isLike, size, onPress}: LikeButtonProp) => {
  const iconSize = LIKE_ICON_SIZE[size];
  return (
    <Pressable onPress={onPress}>
      <Svg Image={isLike ? SVG.HeartOnSvg : SVG.HeartOffSvg} size={iconSize} />
    </Pressable>
  );
};

export const ReplyButton = ({size, onPress}: ReplyButtonProp) => {
  const iconSize = LIKE_ICON_SIZE[size];
  return (
    <Pressable onPress={onPress}>
      <Svg Image={SVG.ReplySvg} size={iconSize} />
    </Pressable>
  );
};

export const HomeButton = ({transparent = false}: HeaderProp) => {
  const navigation = useNavigation<NavigationProp>();
  const goHome = () => {
    navigation.navigate('Main');
  };

  return (
    <Pressable onPress={goHome}>
      <Svg Image={transparent ? SVG.HomeWhiteSvg : SVG.HomeSvg} size={headerIconSize} />
    </Pressable>
  );
};

export const BackButton = ({transparent = false, onPress}: HeaderProp) => {
  const navigation = useNavigation<NavigationProp>();
  const goBack = () => {
    if (onPress) {
      onPress();
      return;
    }
    navigation.goBack();
  };

  return (
    <Pressable onPress={goBack}>
      <Svg Image={transparent ? SVG.BackWhiteSvg : SVG.BackSvg} size={headerIconSize} />
    </Pressable>
  );
};

export const LikeButton = ({transparent = false}: HeaderProp) => {
  const navigation = useNavigation<NavigationProp>();
  const goLikes = () => {
    navigation.navigate('Main');
  };

  return (
    <Pressable onPress={goLikes}>
      <Svg Image={transparent ? SVG.HeartWhiteSvg : SVG.HeartBlackSvg} size={headerIconSize} />
    </Pressable>
  );
};

export const AlarmButton = () => {
  const navigation = useNavigation<NavigationProp>();
  const goAlarms = () => {
    navigation.navigate('Main');
  };

  return (
    <Pressable onPress={goAlarms}>
      <Svg Image={SVG.AlarmSvg} size={headerIconSize} />
    </Pressable>
  );
};

export const Avatar = ({uri, size, onPress}: AvatarProp) => {
  const avatarSize = AVATAR_SIZE[size];
  const styles = {width: avatarSize, height: avatarSize, borderRadius: 100};
  return (
    <Pressable onPress={onPress}>
      <Image source={{uri}} style={styles} />
    </Pressable>
  );
};

export const TextButton = ({text, style}: BasicTextProp) => {
  return (
    <Pressable style={{padding: 2}}>
      <Text text={text} style={{...style}} />
    </Pressable>
  );
};

export const Chip = ({text, leftIcon, rightIcon, viewStyles, textStyles, onPress}: TagProp) => {
  const defaultChipStyle = {
    backgroundColor: COLOR.WHITE,
    borderColor: brandColor,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginVertical: 6,
    marginHorizontal: 8,
  };

  const defaultChipTextStyle = {
    color: COLOR.BLACK,
    fontSize: TEXT_SIZE.size3,
    fontWeight: WEIGHT.REGULAR,
  };
  return (
    <Pressable onPress={onPress}>
      <RadiusView style={viewStyles ? {...defaultChipStyle, ...viewStyles} : defaultChipStyle}>
        <RowView>
          <Text
            text={text}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            style={textStyles ? textStyles : defaultChipTextStyle}
          />
        </RowView>
      </RadiusView>
    </Pressable>
  );
};

export const CameraPicker = ({onPress}: {onPress: () => void}) => {
  return (
    <CirclePressable onPress={onPress} style={{backgroundColor: COLOR.GRAY_200, padding: 6, width: 40}}>
      <Icon name={'camera'} size={30} />
    </CirclePressable>
  );
};
