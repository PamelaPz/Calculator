import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Calculator from './screens/Calculator';

export default class App extends React.Component {

  render() {  //Componentes
    return (
      <View style={styles.container}>
        <Calculator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
