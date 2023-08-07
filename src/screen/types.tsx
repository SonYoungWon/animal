import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DefaultStackParamList} from '../navigation/defaultNavigation';
import {brandColor} from './styled';

export type TEXT_SIZE = keyof typeof TEXT_SIZE;
export const TEXT_SIZE = {
  size1: 9,
  size2: 12,
  size3: 14,
  size4: 21,
  size5: 30,
  size6: 45,
};

export type COLOR = keyof typeof COLOR;
export const COLOR = {
  NONE: '',
  WHITE: '#FFF',
  BLACK: '#191919',
  RED: '#EF315D',
  YELLOW: '#F3B03F',
  GREEN: '#4CD964',
  BLUE: '#3E72FF',
  PURPLE_200: '#F9F5FF',
  PURPLE_400: '#BEB0FB',
  PURPLE_500: '#967EFF',
  PURPLE_600: '#6A49F6',
  PURPLE_600p: '#7C6698',
  PURPLE_LIGHT: '#F9F5FF',
  GRAY_900: '#76767b',
  GRAY_800: '#929292',
  GRAY_750: '#A0A2AD',
  GRAY_700: '#ABABAB',
  GRAY_600: '#BBBBBB',
  GRAY_500: '#D5D3D3',
  GRAY_400: '#DEDEDE',
  GRAY_300: '#EAE7E7',
  GRAY_200: '#EFEFEF',
  GRAY_100: '#F8F8F8',
  DARK_GRAY_450: '#4D4D4D',
  DARK_GRAY_700: '#393939',
};

export type WEIGHT = keyof typeof WEIGHT;
export const WEIGHT = {
  THIN: '200',
  REGULAR: '300',
  MEDIUM: '500',
  BOLD: 'bold',
};

export type BUTTON_SIZE = keyof typeof BUTTON_SIZE;
export const BUTTON_SIZE = {
  SMALL: {width: 74, height: 36, borderRadius: 4},
  MEDIUM: {width: 100, height: 43, borderRadius: 4},
  LARGE: {width: 113, height: 48, borderRadius: 4},
  XLARGE: {height: 54, borderRadius: 4},
};

interface ButtonStyleProp {
  SOLID: {ACTIVE: {ON: string | number; OFF: string | number}; INACTIVE: {ON: string | number; OFF: string | number}};
  OUTLINE: {ACTIVE: {ON: string | number; OFF: string | number}; INACTIVE: {ON: string | number; OFF: string | number}};
  ON_OFF: {ACTIVE: {ON: string | number; OFF: string | number}; INACTIVE: {ON: string | number; OFF: string | number}};
}

export type BUTTON_TEXT_SIZE = keyof typeof BUTTON_TEXT_SIZE;
export const BUTTON_TEXT_SIZE = {
  SMALL: 12,
  MEDIUM: 13,
  LARGE: 14,
  XLARGE: 15,
};

export type BUTTON_SVG_SIZE = keyof typeof BUTTON_SVG_SIZE;
export const BUTTON_SVG_SIZE = {
  SMALL: 15,
  MEDIUM: 16,
  LARGE: 17,
  XLARGE: 18,
};

export type BUTTON_TEXT_COLOR = keyof typeof BUTTON_TEXT_COLOR;
export const BUTTON_TEXT_COLOR = {
  SOLID: {ACTIVE: {ON: COLOR.WHITE, OFF: COLOR.WHITE}, INACTIVE: {ON: COLOR.GRAY_900, OFF: COLOR.GRAY_900}},
  OUTLINE: {ACTIVE: {ON: brandColor, OFF: COLOR.BLACK}, INACTIVE: {ON: COLOR.GRAY_400, OFF: COLOR.GRAY_400}},
  ON_OFF: {ACTIVE: {ON: COLOR.WHITE, OFF: COLOR.BLACK}, INACTIVE: {ON: COLOR.NONE, OFF: COLOR.NONE}},
};

export type BUTTON_BACKGROUND_COLOR = keyof typeof BUTTON_BACKGROUND_COLOR;
export const BUTTON_BACKGROUND_COLOR: ButtonStyleProp = {
  SOLID: {ACTIVE: {ON: brandColor, OFF: COLOR.NONE}, INACTIVE: {ON: COLOR.GRAY_100, OFF: COLOR.NONE}},
  OUTLINE: {ACTIVE: {ON: COLOR.WHITE, OFF: COLOR.WHITE}, INACTIVE: {ON: COLOR.WHITE, OFF: COLOR.NONE}},
  ON_OFF: {ACTIVE: {ON: brandColor, OFF: COLOR.WHITE}, INACTIVE: {ON: COLOR.NONE, OFF: COLOR.NONE}},
};

export const BUTTON_BORDER_WIDTH: ButtonStyleProp = {
  SOLID: {ACTIVE: {ON: 0, OFF: 0}, INACTIVE: {ON: 0, OFF: 0}},
  OUTLINE: {ACTIVE: {ON: 1, OFF: 1}, INACTIVE: {ON: 1, OFF: 0}},
  ON_OFF: {ACTIVE: {ON: 0, OFF: 1}, INACTIVE: {ON: 0, OFF: 0}},
};

export const BUTTON_BORDER_COLOR: ButtonStyleProp = {
  SOLID: {
    ACTIVE: {
      ON: brandColor,
      OFF: COLOR.NONE,
    },
    INACTIVE: {
      ON: COLOR.GRAY_400,
      OFF: COLOR.NONE,
    },
  },
  OUTLINE: {
    ACTIVE: {
      ON: brandColor,
      OFF: COLOR.GRAY_500,
    },
    INACTIVE: {
      ON: COLOR.GRAY_400,
      OFF: COLOR.NONE,
    },
  },
  ON_OFF: {
    ACTIVE: {
      ON: brandColor,
      OFF: COLOR.GRAY_500,
    },
    INACTIVE: {
      ON: COLOR.NONE,
      OFF: COLOR.NONE,
    },
  },
};

export type LIKE_TYPE = keyof typeof LIKE_TYPE;
export const LIKE_TYPE = {
  GYM: 'GYM',
  POST: 'POST',
  BANNER: 'BANNER',
  DAILY: 'DAILY',
  REVIEW: 'REVIEW',
  GYM_REPLY: 'GYM_REPLY',
  POST_REPLY: 'POST_REPLY',
  BANNER_REPLY: 'BANNER_REPLY',
  DAILY_REPLY: 'DAILY_REPLY',
  REVIEW_REPLY: 'REVIEW_REPLY',
} as const;

export type PERMISSIONS_MESSAGE = keyof typeof PERMISSIONS_MESSAGE;
export const PERMISSIONS_MESSAGE = {
  UNAVAILABLE: '해당 디바이스에서 이 기능은 사용할 수 없습니다.',
  DENIED: '권한이 거부되었지만 요청 가능합니다.',
  LIMITED: '권한이 제한되어 있습니다.',
  GRANTED: '권한이 승인되었습니다.',
  BLOCKED: '권한이 거부되어 더 이상 요청할 수 없습니다.',
};

export enum SOCIAL {
  KAKAO,
  APPLE,
}

export type DATE_FORMAT = keyof typeof DATE_FORMAT;
export const DATE_FORMAT = {
  HHSS: 'HHSS',
  DAYHHSS: 'DAYHHSS',
  WEEK: 'WEEK',
  SIMPLE_WEEK: 'SIMPLE_WEEK',
  MMDD_WEEK: 'MMDD_WEEK',
  MMDD_WEEK_TIME: 'MMDD_WEEK_TIME',
  YYMM_STRING: 'YYMM_STRING',
  YYMMDD_DOT: 'YYMMDD_DOT',
  YYYYMM_DOT: 'YYYYMM_DOT',
  YYYYMMDD: 'YYYYMMDD',
  YYYYMMDD_STRING: 'YYYYMMDD_STRING',
  YYYYMMDD_HHMM_STRING: 'YYYYMMDD_HHMM_STRING',
  YYYYMMDD_HHMM_CHAR: 'YYYYMMDD_HHMM_CHAR',
  YYYYMMDD_CHAR: 'YYYYMMDD_CHAR',
  YYYYMMDD_DOT: 'YYYYMMDD_DOT',
  YYYYMMDD_DOT_TIME: 'YYYYMMDD_DOT_TIME',
  YYYYMMDD_WEEK_STRING: 'YYYYMMDD_WEEK_STRING',
  YYYYMMDD_FULL_WEEK_STRING: 'YYYYMMDD_FULL_WEEK_STRING',
};

export type LIKE_ICON_SIZE = keyof typeof LIKE_ICON_SIZE;
export const LIKE_ICON_SIZE = {
  SMALL: 14,
  MEDIUM: 28,
  LARGE: 38,
};

export type AVATAR_SIZE = keyof typeof AVATAR_SIZE;
export const AVATAR_SIZE = {
  SMALL: 28,
  MEDIUM: 48,
  LARGE: 100,
};

export type SOCIAL_LOGIN_TYPE = keyof typeof SOCIAL_LOGIN_TYPE;
export const SOCIAL_LOGIN_TYPE = {
  KAKAO: 'KAKAO',
  APPLE: 'APPLE',
};

export type GENDER_TYPE = keyof typeof GENDER_TYPE;
export const GENDER_TYPE = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
};

export type ADD_CAT_TYPE = keyof typeof ADD_CAT_TYPE;
export const ADD_CAT_TYPE = {
  NAME: 0,
  GENDER: 1,
  WEIGHT: 2,
  TYPE: 3,
  BIRTH: 4,
  IMAGE: 5,
};

export const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
export const simpleWeek = ['일', '월', '화', '수', '목', '금', '토'];

export type NavigationProps = NativeStackNavigationProp<DefaultStackParamList>;
