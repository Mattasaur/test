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

export default function FirstAid({navigation}): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>First Aid</Text>
          <Text style={styles.sectionDescription}>Fees: R1500</Text>
          <Text>
            Purpose: To provide first aid awareness and basic life support
          </Text>
          <Text>Content:</Text>
          <Text>• Wounds and bleeding</Text>
          <Text>• Burns and fractures</Text>
          <Text>• Emergency scene management</Text>
          <Text>• Cardio-Pulmonary Resuscitation (CPR)</Text>
          <Text>• Respiratory distress e.g., Choking, blocked airway</Text>
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
