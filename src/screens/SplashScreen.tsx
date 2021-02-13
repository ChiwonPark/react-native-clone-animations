import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface SplashScreenProps {}

const SplashScreen = (props: SplashScreenProps) => {
  const navigation = useNavigation();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('showcase');
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Weasel Showcase</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
