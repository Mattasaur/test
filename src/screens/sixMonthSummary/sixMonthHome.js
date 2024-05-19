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
import { NavigationContainer } from '@react-navigation/native';

export default function SixMonthHome( {navigation} ): React.JSX.Element {

  return (
    
    <SafeAreaView>
      <StatusBar/>
      <ScrollView>
        <View>
          <Text>Hi</Text>
          <Button title='First Aid' onPress={()=>navigation.navigate("First Aid")}/>
          <Button title='Sewing'/>
          <Button title='Landscaping'/>
          <Button title='Life Skills'/>
        </View>
      </ScrollView>
    </SafeAreaView>
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