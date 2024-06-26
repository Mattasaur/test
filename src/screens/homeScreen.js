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

function HomeScreen({navigation}): React.JSX.Element {
  return (
    // Temp Homescreen to hold button to courses
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            This is a test to view if our HomeScreen is working
          </Text>
          <Button
            title="SixMonthCourses"
            color={'#313b74'}
            style={styles.button}
            onPress={() => navigation.navigate('Six Month Courses')}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    marginTop: 24,
  },
});

export default HomeScreen;
