import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ShowcaseLayoutProps {
  children: React.ReactNode;
}

const ShowcaseLayout = ({children}: ShowcaseLayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default ShowcaseLayout;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
});
