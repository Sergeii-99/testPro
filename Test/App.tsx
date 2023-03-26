import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function App(): JSX.Element {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.backgroundStyle}>
      <SafeAreaView>
        <Text style={styles.text}>Hello World</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'DeliciousHandrawn-Regular',
  },
});

export default App;
