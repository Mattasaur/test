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

export default function Sewing({navigation}): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Sewing</Text>
          <Text style={styles.sectionDescription}>Fees: R1500</Text>
          <Text>
            Purpose: To provide alterations and new garment tailoring services
          </Text>
          <Text>Content:</Text>
          <Text>• Types of stitches</Text>
          <Text>• Threading a sewing machine</Text>
          <Text>• Sewing buttons, zips, hems and seams</Text>
          <Text>• Alterations</Text>
          <Text>• Designing and sewing new garments</Text>
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
