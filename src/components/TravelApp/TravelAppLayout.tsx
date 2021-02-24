import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Badge from './Badge';

interface TravelAppLayoutProps {
  children: React.ReactNode;
}

const TravelAppLayout = ({children}: TravelAppLayoutProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

type TravelAppHeaderProps = {};
const TravelAppHeader = (props: TravelAppHeaderProps) => {
  return (
    <View style={styles.header}>
      <Badge
        style={styles.headerBadgeMargin}
        color="cyan"
        icon="search1"></Badge>
      <Badge color="cyan" icon="search1"></Badge>
    </View>
  );
};

type TravelAppMainProps = {
  children: React.ReactNode;
};
const TravelAppMain = ({children}: TravelAppMainProps) => {
  return <View style={styles.mainContainer}>{children}</View>;
};

type TravelAppFooterProps = {};
const TravelAppFooter = (props: TravelAppFooterProps) => {
  return (
    <View>
      <Text>footer</Text>
    </View>
  );
};

TravelAppLayout.Header = TravelAppHeader;
TravelAppLayout.Main = TravelAppMain;
TravelAppLayout.Footer = TravelAppFooter;

export default TravelAppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 24,
  },
  headerBadgeMargin: {
    marginRight: 16,
  },
  mainContainer: {
    flex: 1,
  },
});
