import {useRef} from 'react';
import Video from 'react-native-video';
import {AnimalFeed} from '../../global/dto/animalFeed';
import {RadiusView, VerticalMargin, Video as VideoView, View} from '../atom/styled';
import {FeedHeader} from '../molecules/view';
import {COLOR} from '../types';

export default (feed: AnimalFeed, index: number) => {
  const videoRefs = useRef<Video[]>([]);

  return (
    <View>
      <VerticalMargin value={8}>
        <RadiusView radius={4} style={{backgroundColor: COLOR.WHITE}}>
          <FeedHeader uri={feed.companion.image} name={feed.companion.name} />
          {feed.video && (
            <VideoView
              ref={(ref) => (videoRefs.current[index] = ref!)}
              source={{uri: feed.video}}
              height={600}
              resizeMode={'cover'}
            />
          )}
        </RadiusView>
      </VerticalMargin>
      <VerticalMargin value={8}>
        <RadiusView radius={4} style={{backgroundColor: COLOR.WHITE}}>
          <FeedHeader uri={feed.companion.image} name={feed.companion.name} />
          {feed.video && <VideoView source={{uri: feed.video}} repeat={true} height={600} resizeMode={'cover'} />}
        </RadiusView>
      </VerticalMargin>
    </View>
  );
};
