import {AnimalFeed} from '../../global/dto/animalFeed';
import {VerticalFlatList} from '../atom/list';
import {HorizontalMargin, View} from '../atom/styled';
import Calendar from '../organisms/calendar';
import feed from '../organisms/feed';

export default ({feeds}: {feeds: AnimalFeed[]}) => {
  return (
    <View>
      <Calendar />
      <HorizontalMargin value={16}>
        <VerticalFlatList data={feeds} render={feed} />
      </HorizontalMargin>
    </View>
  );
};
