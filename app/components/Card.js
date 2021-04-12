import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import AppText from './Text';

function Card({ title, subTitle, image, style }) {
  return (
    <TouchableOpacity style={[styles.card, style]}>
      <Image style={styles.image} source={image} />
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
  container: {
    padding: 20,
  },
});

export default Card;
