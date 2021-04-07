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
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <TouchableNativeFeedback onPress={() => console.log('Image touched.')}>
        <View
          style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}
        ></View>
      </TouchableNativeFeedback>
      <TouchableHighlight onPress={() => console.log('Image touched.')}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>
      <TouchableOpacity onPress={() => console.log('Image touched.')}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
