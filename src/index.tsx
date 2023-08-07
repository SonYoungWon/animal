import React from 'react';
import {useRecoilValueLoadable, useSetRecoilState} from 'recoil';
import {myState} from './global/recoil/atoms';
import {oneUserSelector} from './global/recoil/selector';
import DefaultNavigation from './navigation/defaultNavigation';
import LoginNavigation from './navigation/loginNavigation';
import {FlexView} from './screen/atom/styled';
import {AsyncView, Loading} from './screen/atom/view';

export default () => {
  const validUser = useRecoilValueLoadable(oneUserSelector);
  const setUser = useSetRecoilState(myState);
  if (validUser.state === 'hasValue') {
    if (validUser.contents) setUser(validUser.contents);
  }
  return (
    <FlexView>
      <AsyncView loadable={validUser} errorChildren={<LoginNavigation />}>
        <DefaultNavigation />
      </AsyncView>
      <Loading />
    </FlexView>
  );
};
