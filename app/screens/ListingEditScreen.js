import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.string().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('description'),
  category: Yup.object().required().nullable().label('category'),
});

const categories = [
  {
    label: 'Furniture',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Clothing',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
  {
    label: 'Camera',
    value: Math.random(),
    backgroundColor: 'red',
    icon: 'email',
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8} // 10000.99
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
  },
});

export default ListingEditScreen;
