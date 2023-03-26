import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaskedView from '@react-native-community/masked-view';

const GradientTextMask = ({ text }) => {
  return (
    <View style={styles.container}>
      <MaskedView
        style={styles.mask}
        maskElement={
          <View style={styles.maskElement} />
        }
      >
        <View style={styles.background} />
        <Text style={styles.text}>{text}</Text>
      </MaskedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  mask: {
    flex: 1,
  },
  maskElement: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.3,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    // градиентное заполнение текста
    background: '-webkit-linear-gradient(left, #FFC371, #FF5F6D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});

export default GradientTextMask;
