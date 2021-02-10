import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import WelcomeSection from './WelcomeSection';
import {
  ReloadInstructions,
  DebugInstructions,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

interface WelcomeProps {}

const Welcome = (props: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <WelcomeSection title="Step One">
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen
        and then come back to see your edits.
      </WelcomeSection>

      <WelcomeSection title="See Your Changes">
        <ReloadInstructions />
      </WelcomeSection>

      <WelcomeSection title="Debug">
        <DebugInstructions />
      </WelcomeSection>

      <WelcomeSection title="Learn More">
        Read the docs to discover what to do next:
      </WelcomeSection>
      <LearnMoreLinks />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
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
