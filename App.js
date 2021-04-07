import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  bar,
} from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('white');
  const handleThemeChange = (theme) => {
    StatusBar.setBarStyle(theme === 'light' ? 'dark-content' : 'light-content');
    setBgColor(theme === 'light' ? 'white' : 'black');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Switch Theme"
        onPress={() =>
          Alert.alert('Change Theme', 'Please choose your theme.', [
            { text: 'Dark', onPress: () => handleThemeChange('dark') },
            { text: 'Light', onPress: () => handleThemeChange('light') },
          ])
        }
      />

      {/* Only works in iOS */}
      {/* <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt('Custom Title', 'Custom Message', (text) =>
            console.log(text)
          )
        }
      /> */}
    </SafeAreaView>
  );
}
