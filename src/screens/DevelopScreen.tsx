import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DevelopScreenProps {}

const DevelopScreen = (props: DevelopScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>DevelopScreen</Text>
    </View>
  );
};

export default DevelopScreen;

const styles = StyleSheet.create({
  container: {}
});
