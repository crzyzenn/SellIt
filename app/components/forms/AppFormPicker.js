import { useFormikContext } from 'formik';
import React from 'react';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
  items,
  name,
  placeholder,
  width,
  numberOfColumns,
  PickerItemComponent,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
