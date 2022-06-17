import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Texts from './src/Texts';

const App = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.joko}>Joko</Text>
      <Texts />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    color: '#1b1b1b',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
  joko: {
    fontSize: 30,
  },
});

export default App;
