import React from 'react';
import {LogBox, Text, TextInput} from 'react-native';
import {RecoilRoot} from 'recoil';
import Index from './src/index';

if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
(Text as any).defaultProps.allowFontScaling = false;
if ((TextInput as any).defaultProps == null) (TextInput as any).defaultProps = {};
(TextInput as any).defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <RecoilRoot>
      <Index />
    </RecoilRoot>
  );
};

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

export default App;
