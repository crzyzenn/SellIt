import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexBasis: '80%', backgroundColor: 'black' }}>
        <Image
          source={require('./assets/background.jpg')}
          style={{ height: '100%', width: '100%' }}
        />
        <View
          style={{
            top: '15%',
            width: '100%',
            height: 500,
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/icon.png')}
              style={{ height: 100, width: 100, marginBottom: 20 }}
            />
            <Text style={{ fontWeight: 'bold' }}>Sell What You Don't Need</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'tomato' }} />
      <View style={{ flex: 1, backgroundColor: 'teal' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
