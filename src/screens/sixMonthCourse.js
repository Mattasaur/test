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
    // Stack Navigator to panel between each course
    <Stack.Navigator initialRouteName="sixMonthHome">
      <Stack.Screen
        name="sixMonthHome"
        // option that hides header 
        options={{headerShown: false}}
        component={SixMonthHome}
      />
      <Stack.Screen
        name="First Aid"
        // option that hides header 
        options={{headerShown: false}}
        component={FirstAid}
      />
      <Stack.Screen
        name="Sewing"
        // option that hides header 
        options={{headerShown: false}}
        component={Sewing}
      />
      <Stack.Screen
        name="Life Skills"
        // option that hides header 
        options={{headerShown: false}}
        component={LifeSkills}
      />
      <Stack.Screen
        name="Landscaping"
        // option that hides header 
        options={{headerShown: false}}
        component={Landscaping}
      />
    </Stack.Navigator>
  );
}
