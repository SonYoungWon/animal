export interface TextStyleProp {
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export interface TextIconStyleProp {
  size?: number;
}

export interface BasicTextProp {
  text: string | number;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  iconPadding?: number;
  style?: TextStyleProp;
}

export interface TextInputProp {
  placeholder: string;
  searchText: string | number;
  isActive?: boolean;
  isBorderBottom?: boolean;
  editable?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  setSearchText?: any;
  focusEvent?: () => void;
  blurEvent?: () => void;
  cancelEvent?: () => void;
}
