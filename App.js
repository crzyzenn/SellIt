import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'teal',
          width: '100%',
          height: landscape ? '100%' : '30%',
        }}
      >
        <Text>hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
