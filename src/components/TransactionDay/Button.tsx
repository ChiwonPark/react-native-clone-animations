import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../../lib/colors';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

interface ButtonProps {
  icon: string;
  color: string;
  text: string;
}

const Button = ({icon, color, text = ''}: ButtonProps) => {
  return (
    <View style={styles.container}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={10}
      />
      <LinearGradient
        style={[styles.iconWrapper]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.2}}
        colors={[colors[color][200], colors[color][500]]}>
        <Icon name={icon} size={30} color={colors.white} />
      </LinearGradient>
      <Text style={[styles.text, {color: colors[color][300]}]}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: `${colors.indigo[300]}99`,
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
