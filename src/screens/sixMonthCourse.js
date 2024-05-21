import React from 'react';
import SixMonthHome from './sixMonthSummary/sixMonthHome';
import FirstAid from './sixMonthSummary/firstAid';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sewing from './sixMonthSummary/sewing';
import LifeSkills from './sixMonthSummary/lifeSkills';
import Landscaping from './sixMonthSummary/landscaping';
const Stack = createNativeStackNavigator();

export default function SixMonthCourses({navigation}): React.JSX.Element {
  return (
    <Stack.Navigator initialRouteName="sixMonthHome">
      <Stack.Screen
        name="sixMonthHome"
        options={{headerShown: false}}
        component={SixMonthHome}
      />
      <Stack.Screen
        name="First Aid"
        options={{headerShown: false}}
        component={FirstAid}
      />
      <Stack.Screen
        name="Sewing"
        options={{headerShown: false}}
        component={Sewing}
      />
      <Stack.Screen
        name="Life Skills"
        options={{headerShown: false}}
        component={LifeSkills}
      />
      <Stack.Screen
        name="Landscaping"
        options={{headerShown: false}}
        component={Landscaping}
      />
    </Stack.Navigator>
  );
}
