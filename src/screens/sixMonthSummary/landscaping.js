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

export default function Landscaping({navigation}): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Landscaping</Text>
          <Text style={styles.sectionDescription}>Fees: R1500</Text>
          <Text>
            Purpose: To provide landscaping services for new and established
            gardens
          </Text>
          <Text>Content:</Text>
          <Text>• Indigenous and exotic plants and trees</Text>
          <Text>
            • Fixed structures (fountains, statues, benches, tables, built-in
            braai)
          </Text>
          <Text>• Balancing of plants and trees in a garden</Text>
          <Text>• Aesthetics of plant shapes and colours</Text>
          <Text>• Garden layout</Text>
          <Button
            title="Add to Quote"
            color={'#313b74'}
            onPress={() => {
              console.log('Add to Quote works!');
            }}
          />
          <Button
            title="Return"
            color={'#313b74'}
            onPress={() => {
              navigation.goBack();
            }}
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
  highlight: {
    fontWeight: '700',
  },
});
