import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Home} from './assets';


function App(): JSX.Element {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.backgroundStyle}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Home width={45} height={45}/>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'DeliciousHandrawn-Regular',
  },
});

export default App;
