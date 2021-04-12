import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

const { colors } = defaultStyles;

function AppPicker({
  icon,
  items,
  placeholder,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  onSelectItem,
  selectedItem,
  width = '100%',
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              size={20}
              color={colors.medium}
              name={icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            style={styles.icon}
            size={20}
            color={colors.medium}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  textInput: defaultStyles.text,
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
