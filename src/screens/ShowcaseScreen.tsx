import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Showcase from '../components/Showcase';

interface ShowcaseScreenProps {}

const ShowcaseScreen = (props: ShowcaseScreenProps) => {
  return (
    <View style={styles.container}>
      <Showcase />
    </View>
  );
};

export default ShowcaseScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
