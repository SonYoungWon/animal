import React from 'react';
import {HorizontalPadding, VerticalPadding} from '../atom/styled';
import {SocialLoginButton} from '../molecules/button';

export default () => {
  return (
    <HorizontalPadding style={{zIndex: 100}}>
      <SocialLoginButton type={'APPLE'} />
      <VerticalPadding value={8} />
      <SocialLoginButton type={'KAKAO'} />
      <VerticalPadding value={25} />
    </HorizontalPadding>
  );
};
