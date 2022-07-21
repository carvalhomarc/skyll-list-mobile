import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';
//All props of TouchableOpacity
interface ButtonProps extends TouchableOpacityProps {
  title:string
}
// ...rest is the rest of the ALL props of TouchableOpacity
export function Button({title,...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
