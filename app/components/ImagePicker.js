import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function AppImagePicker({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted)
      alert('You need to enable the permission to access camera roll.');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  const deleteImage = () => {
    Alert.alert('Delete Image.', 'Are you sure you want to delete the image?', [
      {
        text: 'Delete',
        style: 'default',
        onPress: () => {
          onChangeImage(null);
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else deleteImage();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.imageContainer}>
        {!imageUri ? (
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={40}
          />
        ) : (
          <Image style={styles.image} source={{ uri: imageUri }} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.light,
    width: 100,
    height: 100,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
