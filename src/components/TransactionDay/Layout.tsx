import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Background from './Background';

/**
 * Layout
 */
export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

/**
 * Main
 */
export type MainProps = {
  children: React.ReactNode;
};

const Main = ({children}: MainProps) => {
  return (
    <View style={styles.container}>
      <Background />
      <SafeAreaView style={styles.block} edges={['top']}>
        {children}
      </SafeAreaView>
    </View>
  );
};

/**
 * Footer
 */
export type FooterProps = {
  children: React.ReactNode;
};

const Footer = ({children}: FooterProps) => {
  return (
    <SafeAreaView style={styles.footer} edges={['bottom']}>
      {children}
    </SafeAreaView>
  );
};

/**
 * Export
 */
Layout.Main = Main;
Layout.Footer = Footer;

export default Layout;

/**
 * Style
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    flex: 1,
    padding: 24,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#373856',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 16,
  },
});
