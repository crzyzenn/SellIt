import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/Text';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/zen.jpeg')}
            title="Zenish Shrestha"
            subTitle="5 Listings"
          />
          <ListItem
            image={require('../assets/zen.jpeg')}
            title="Zenish Shrestha"
            subTitle="5 Listings"
          />
          <ListItem
            image={require('../assets/zen.jpeg')}
            title="Zenish Shrestha"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userContainer: {
    marginVertical: 30,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default ListingDetailsScreen;
