import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TransactionDay from '../../components/TransactionDay/TransactionDay';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return <TransactionDay />;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
