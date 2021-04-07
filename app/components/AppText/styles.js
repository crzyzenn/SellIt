import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'teal',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
