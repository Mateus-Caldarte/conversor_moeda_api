import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Conversor from './src /components/conversor';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
