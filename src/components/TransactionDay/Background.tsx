import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  ViewProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../lib/colors';

type BackgroundProps = {
  style?: ViewStyle;
};

const Background = ({style}: BackgroundProps) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        style={styles.shape}
        colors={[colors.pink[100], colors.pink[300], colors.pink.A700]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      />
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#353465',
  },
  shape: {
    position: 'absolute',
    width: 380,
    height: 380,
    top: -70,
    left: -20,
    borderRadius: 90,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
});
