import * as React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface BadgeBaseProps {
  children: React.ReactNode;
  style?: ViewStyle;
  color?: string;
}

const BadgeBase = ({style, children, color}: BadgeBaseProps) => {
  return (
    <View style={[styles.container, style, {backgroundColor: color}]}>
      {children}
    </View>
  );
};

export default BadgeBase;

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
