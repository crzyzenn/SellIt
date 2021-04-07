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
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'teal',
          width: 400,
          // flexShrink: 1, // shrink this item so that other items may fit in the layout
          flex: -1, // negative -> flex shrink positive -> flex grow
          height: 100,
        }}
      />
      <View style={{ backgroundColor: 'gray', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
    </View>
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
