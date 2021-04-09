import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

function Icon({
  backgroundColor = '#000',
  iconColor = '#fff',
  name,
  size = 40,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
}

export default Icon;
