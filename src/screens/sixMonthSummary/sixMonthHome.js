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

export default function SixMonthHome({navigation}): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Button
            title="First Aid"
            color={'#313b74'}
            style={styles.Button}
            onPress={() => navigation.navigate('First Aid')}
          />
          <Button
            title="Sewing"
            color={'#313b74'}
            style={styles.Button}
            onPress={() => navigation.navigate('Sewing')}
          />
          <Button
            title="Landscaping"
            color={'#313b74'}
            style={styles.Button}
            onPress={() => navigation.navigate('Landscaping')}
          />
          <Button
            title="Life Skills"
            color={'#313b74'}
            style={styles.Button}
            onPress={() => navigation.navigate('Life Skills')}
          />
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
  Button: {
   paddingVertical: 24,
  },
});
