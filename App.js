import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/homeScreen';
import SixMonthCourses from './src/screens/sixMonthCourse';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Six Month Courses" component={SixMonthCourses}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

