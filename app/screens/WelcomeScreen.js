import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import App from '../../App';
import AppButton from '../components/Button';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  tagline: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: { width: '100%', height: 70, backgroundColor: '#fc5c65' },
  registerButton: { width: '100%', height: 70, backgroundColor: '#4ecdc4' },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: 150,
    alignItems: 'center',
  },
});
export default WelcomeScreen;
