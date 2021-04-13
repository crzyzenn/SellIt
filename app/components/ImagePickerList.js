import { useFormikContext } from 'formik';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ErrorMessage } from './forms';
import ImagePicker from './ImagePicker';

function ImagePickerList(props) {
  const [imagePickers, setImagePickers] = useState([null]);
  const { setFieldValue, errors } = useFormikContext();

  const deleteImageFromList = (deleteUri) => {
    setImagePickers(imagePickers.filter((uri) => uri !== deleteUri));
  };

  useEffect(() => {
    let images = imagePickers.filter((img) => !!img);
    setFieldValue('images', images);
  }, [imagePickers]);

  console.log(imagePickers);

  return (
    <View style={styles.container}>
      {imagePickers.map((index) => (
        <ImagePicker
          key={index}
          style={styles.picker}
          deleteImageFromList={deleteImageFromList}
          onSelect={(uri) => {
            setImagePickers([...imagePickers, uri]);
          }}
        />
      ))}
      <ErrorMessage error={errors['images']} visible={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  picker: {
    marginVertical: 10,
    marginRight: 20,
  },
});

export default ImagePickerList;
