import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../components/TransactionDay/Button';
import colors from '../lib/colors';
import Layout from '../components/TransactionDay/Layout';
import FooterItem from '../components/TransactionDay/FooterItem';

//https://dribbble.com/shots/5901749-INvestment-app-Firststep

interface TransactionDayProps {}

const TransactionDay = (props: TransactionDayProps) => {
  return (
    <Layout>
      <Layout.Main>
        <Text style={styles.title}>Classify transaction</Text>
        <Text style={styles.subtitle}>
          Classify this transaction into a particular category
        </Text>

        <View style={styles.row}>
          <Button icon="appstore1" text="General" color="red" />
          <Button icon="car" text="Navigation" color="orange" />
        </View>
        <View style={styles.row}>
          <Button icon="shoppingcart" text="Shopping" color="green" />
          <Button icon="gift" text="Gift" color="blue" />
        </View>
        <View style={styles.row}>
          <Button icon="book" text="Book" color="purple" />
          <Button icon="search1" text="Search" color="indigo" />
        </View>
      </Layout.Main>

      <Layout.Footer>
        <FooterItem icon="home" focused></FooterItem>
        <FooterItem icon="enviromento"></FooterItem>
        <FooterItem icon="user"></FooterItem>
      </Layout.Footer>
    </Layout>
  );
};

export default TransactionDay;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.lightText.primary,
  },
  subtitle: {
    fontSize: 16,
    width: '66%',
    marginBottom: 24,
    color: colors.lightText.primary,
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
});
