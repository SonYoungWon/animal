import {brandColor} from '../styled';
import {COLOR} from '../types';

export type FILTER_TAG_STYLE = keyof typeof FILTER_TAG_STYLE;
export const FILTER_TAG_STYLE = {
  ACTIVE: {
    viewStyles: {
      borderColor: brandColor,
      borderWidth: 1,
    },
    textStyles: {
      color: brandColor,
    },
  },
  INACTIVE: {
    viewStyles: {
      borderColor: COLOR.GRAY_400,
      borderWidth: 1,
    },
    textStyles: {
      color: COLOR.GRAY_900,
    },
  },
};

export type STATUS_TAG_STYLE = keyof typeof STATUS_TAG_STYLE;
export const STATUS_TAG_STYLE = {
  ACTIVE: {
    viewStyles: {
      backgroundColor: COLOR.BLACK,
    },
    textStyles: {
      color: COLOR.WHITE,
    },
  },
  INACTIVE: {
    viewStyles: {
      borderColor: COLOR.GRAY_100,
    },
    textStyles: {
      color: COLOR.GRAY_600,
    },
  },
};
