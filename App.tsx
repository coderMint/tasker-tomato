/**
 * Folder Structure followed from --> https://www.youtube.com/watch?v=ccOtKD5ZL1E (Sim Coder) and https://www.youtube.com/watch?v=2-xga0a0T2Q&ab_channel=JimmyCook (jmmy cook)
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import HomeView from './src/screens/Home/Home';

function App(): JSX.Element {
  return (
    <View>
      <HomeView />
    </View>
  );
}

export default App;
