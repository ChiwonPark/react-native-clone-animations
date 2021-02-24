import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BadgeBase from './BadgeBase';
import colors from '../../lib/colors';

interface DaysBadgeProps {
  days: number;
}

const DaysBadge = ({days}: DaysBadgeProps) => {
  return (
    <BadgeBase color={colors.pink[200]} style={{marginRight: 12}}>
      <Text style={styles.days}>{days}</Text>
      <Text style={styles.postfix}>Days</Text>
    </BadgeBase>
  );
};

export default DaysBadge;

const styles = StyleSheet.create({
  days: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  postfix: {
    color: 'white',
    fontSize: 11,
    fontWeight: '500',
    marginTop: -4,
  },
});
