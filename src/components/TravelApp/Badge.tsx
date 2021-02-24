import * as React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface BadgeProps {
  style?: ViewStyle;
  icon: string;
  color: string;
}

const Badge = ({style}: BadgeProps) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name="icon" color="white" size={24} />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
