import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}
      >
        <FormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress" // Works only in iOS for autofill from keychain
        />
        <FormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password" // Works only in iOS for autofill from keychain
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 50,
  },
});

export default LoginScreen;
