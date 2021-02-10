import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../lib/colors';

interface FooterItemProps {
  icon: string;
  focused?: boolean;
}

const FooterItem = ({icon, focused}: FooterItemProps) => {
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={24}
        color={focused ? colors.red[300] : colors.grey[600]}
      />
    </View>
  );
};

export default FooterItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
