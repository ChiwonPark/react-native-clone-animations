import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface TripDetailScreenProps {}

const TripDetailScreen = (props: TripDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>TripDetailScreen</Text>
    </View>
  );
};

export default TripDetailScreen;

const styles = StyleSheet.create({
  container: {},
});
