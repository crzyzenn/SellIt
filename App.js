import React from 'react';
import Screen from './app/components/Screen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text } from 'react-native';
import Button from './app/components/Button';
import colors from './app/config/colors';

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Link = () => {
  const { navigate } = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => {
        navigate('TweetDetails', { id: 1 });
      }}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

// Stack Navigator
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      options={{ title: 'Tweets' }}
      component={TweetDetails}
    />
  </Stack.Navigator>
);

// Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
