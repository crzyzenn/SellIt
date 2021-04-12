import { useFormikContext } from 'formik';
import React from 'react';

import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';

function FormPicker({
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
      <Picker
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

export default FormPicker;
