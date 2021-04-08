import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'T1x',
    description: 'D1',
    image: require('../assets/zen.jpeg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/zen.jpeg'),
  },
  {
    id: 3,
    title: 'T2',
    description: 'D2',
    image: require('../assets/zen.jpeg'),
  },
  {
    id: 4,
    title: 'T2',
    description: 'D2',
    image: require('../assets/zen.jpeg'),
  },
  {
    id: 5,
    title: 'T2',
    description: 'D2',
    image: require('../assets/zen.jpeg'),
  },
  {
    id: 6,
    title: 'T2',
    description: 'D2',
    image: require('../assets/zen.jpeg'),
  },
  {
    id: 7,
    title: 'T2',
    description: 'D2',
    image: require('../assets/zen.jpeg'),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  // Delete a particular message
  const handleDelete = (message) => {
    // Delete message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item, index, separators }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.title)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: 'T2',
              description: 'D2',
              image: require('../assets/zen.jpeg'),
            },
            {
              id: 5,
              title: 'T2',
              description: 'D2',
              image: require('../assets/zen.jpeg'),
            },
            {
              id: 6,
              title: 'T2',
              description: 'D2',
              image: require('../assets/zen.jpeg'),
            },
            {
              id: 7,
              title: 'T2',
              description: 'D2',
              image: require('../assets/zen.jpeg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
