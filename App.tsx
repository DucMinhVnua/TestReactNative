import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import HomePage from './src/pages/homePage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
