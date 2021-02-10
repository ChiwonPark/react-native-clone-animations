import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type WelcomeSectionProps = {
  title: string;
  children: string | React.ReactNode;
};

const WelcomeSection = ({title, children}: WelcomeSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444444',
  },
  highlight: {
    fontWeight: '700',
  },
});
