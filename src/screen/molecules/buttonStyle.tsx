import {socialColor} from '../styled';
import {SVG} from '../svgs';
import {COLOR, SOCIAL_LOGIN_TYPE, WEIGHT} from '../types';

export interface SocialLoginButtonProps {
  type: SOCIAL_LOGIN_TYPE;
  onPress: () => void;
}

const iconSize = 18;

export const SOCIAL_DEFAULT_STYLE = {
  fontSize: 16,
  fontWeight: WEIGHT.BOLD,
  alignItems: 'center' as 'center',
  justifyContent: 'center' as 'center',
  height: 54,
};

export const SOCIAL_LOGIN_STYLE = {
  KAKAO: {
    text: '카카오계정으로 로그인',
    icon: <SVG.KakaoSvg width={iconSize} height={iconSize} />,
    style: {
      backgroundColor: socialColor.kakao,
      color: COLOR.BLACK,
      ...SOCIAL_DEFAULT_STYLE,
    },
  },
  APPLE: {
    text: '애플계정으로 로그인',
    icon: <SVG.AppleSvg width={iconSize} height={iconSize} />,
    style: {
      backgroundColor: socialColor.apple,
      color: COLOR.WHITE,
      ...SOCIAL_DEFAULT_STYLE,
    },
  },
};
