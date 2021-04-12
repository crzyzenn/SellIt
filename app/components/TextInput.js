import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

const { colors } = defaultStyles;

function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          size={20}
          color={colors.medium}
          name={icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
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
  textInput: defaultStyles.text,
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
