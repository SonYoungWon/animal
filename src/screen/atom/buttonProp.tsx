import {LIKE_ICON_SIZE} from '../types';

export interface BasicButtonProp {
  text: string;
  size?: 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';
  type?: 'SOLID' | 'OUTLINE' | 'ON_OFF';
  status?: 'ACTIVE' | 'INACTIVE';
  onOff?: 'ON' | 'OFF';
  isRed?: boolean;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  onPress: () => void;
}

export interface LikeButtonProp {
  isLike: boolean;
  size: LIKE_ICON_SIZE;
  onPress: () => void;
}

export interface ReplyButtonProp {
  size: LIKE_ICON_SIZE;
  onPress: () => void;
}

export interface AvatarProp {
  uri: string;
  size: LIKE_ICON_SIZE;
  onPress: () => void;
}

export interface HeaderProp {
  transparent?: boolean;
  onPress?: () => void;
}

export interface TagProp {
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  viewStyles?: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
  };
  textStyles?: {
    color?: string;
    fontSize?: number;
    fontWeight?: string;
  };
  onPress?: () => void;
}
