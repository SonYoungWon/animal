import React from 'react';
import {useSetRecoilState} from 'recoil';
import {tokenState} from '../../global/recoil/atoms';
import {AlignView, Pressable, RadiusButtonView} from '../atom/styled';
import {Text} from '../atom/text';
import {signInWithKakao} from './buttonEvent';
import {SocialLoginButtonProps} from './buttonProp';
import {SOCIAL_LOGIN_STYLE} from './buttonStyle';

export const SocialLoginButton = (props: SocialLoginButtonProps) => {
  const {type} = props;
  const {text, icon, style} = SOCIAL_LOGIN_STYLE[type];
  const {color, fontSize, fontWeight, backgroundColor, height, alignItems, justifyContent} = style;
  const setToken = useSetRecoilState(tokenState);
  return (
    <Pressable onPress={() => signInWithKakao(setToken)}>
      <RadiusButtonView style={{backgroundColor, height, justifyContent}}>
        <AlignView>
          <Text text={text} leftIcon={icon} iconPadding={10} style={{color, fontSize, fontWeight}} />
        </AlignView>
      </RadiusButtonView>
    </Pressable>
  );
};
