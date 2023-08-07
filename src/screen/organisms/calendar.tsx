import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import {CalenderDay} from '../molecules/view';
import {brandColor} from '../styled';

export default () => {
  let now = new Date();
  now.setDate(now.getDate() - 3);
  return (
    <ReactNativeCalendarStrip
      scrollable
      style={{height: 140, paddingTop: 50}}
      calendarColor={brandColor}
      dayComponentHeight={90}
      dayComponent={(day) => <CalenderDay day={day} />}
      startingDate={now}
      useIsoWeekday={false}
      leftSelector={<></>}
      rightSelector={<></>}
      showMonth
      locale={locale}
    />
  );
};

const locale = {
  name: 'kor',
  config: {
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
  },
};
