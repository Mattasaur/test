import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import SixMonthHome from './sixMonthSummary/sixMonthHome';
import FirstAid from './sixMonthSummary/firstAid';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();


export default function SixMonthCourses( {navigation} ): React.JSX.Element {

  return (
<Stack.Navigator initialRouteName="sixMonthHome">
  <Stack.Screen name="sixMonthHome" component={SixMonthHome}/>
  <Stack.Screen name="First Aid" component={FirstAid}/>
</Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
