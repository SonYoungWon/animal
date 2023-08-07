import React from 'react';
import {useRecoilValue, useRecoilValueLoadable} from 'recoil';
import {myState} from '../../global/recoil/atoms';
import {userFeedListSelector} from '../../global/recoil/selector';
import {AsyncView} from '../atom/view';
import FeedTemplate from '../templates/feedListTemplate';

export default () => {
  const my = useRecoilValue(myState);
  const userFeeds = useRecoilValueLoadable(userFeedListSelector({type: 'USER', userId: my.id}));
  return (
    <AsyncView loadable={userFeeds}>
      <FeedTemplate feeds={userFeeds.contents} />
    </AsyncView>
  );
};
