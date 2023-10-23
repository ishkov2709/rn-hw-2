import { Formik } from 'formik';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const RegisterForm = () => {
  const [hide, setHide] = useState(true);
  const [onInputFocus, setOnInputFocus] = useState({
    login: false,
    email: false,
    password: false,
  });

  return (
    <Formik
      initialValues={{ login: '', email: '', password: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.inputFields}>
          <KeyboardAvoidingView
            behavior={'padding'}
            keyboardVerticalOffset="320"
            style={styles.keyboard}
          >
            <TextInput
              style={
                onInputFocus.login ? styles.onFocusInput : styles.onBlurInput
              }
              onChangeText={handleChange('login')}
              placeholder="Логін"
              value={values.login}
              onFocus={() =>
                setOnInputFocus(prevState => ({ ...prevState, login: true }))
              }
              onBlur={() =>
                setOnInputFocus(prevState => ({ ...prevState, login: false }))
              }
            />
            <TextInput
              style={
                onInputFocus.email ? styles.onFocusInput : styles.onBlurInput
              }
              placeholder="Адреса електронної пошти"
              value={values.email}
              onChangeText={handleChange('email')}
              onFocus={() =>
                setOnInputFocus(prevState => ({ ...prevState, email: true }))
              }
              onBlur={() =>
                setOnInputFocus(prevState => ({ ...prevState, email: false }))
              }
            />

            <View>
              <TextInput
                style={
                  onInputFocus.password
                    ? styles.onFocusInput
                    : styles.onBlurInput
                }
                placeholder="Пароль"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={hide}
                onFocus={() =>
                  setOnInputFocus(prevState => ({
                    ...prevState,
                    password: true,
                  }))
                }
                onBlur={() =>
                  setOnInputFocus(prevState => ({
                    ...prevState,
                    password: false,
                  }))
                }
              />
              <Text style={styles.showSwitch} onPress={() => setHide(!hide)}>
                {hide ? 'Показати' : 'Приховати'}
              </Text>
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.btn} onPress={handleSubmit}>
            Зареєстуватися
          </Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  onBlurInput: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  onFocusInput: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    borderColor: '#FF6C00',
    borderRadius: 8,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  showSwitch: {
    position: 'absolute',
    top: 15,
    right: 16,
    color: '#1B4371',
    fontSize: 16,
  },
  btn: {
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  keyboard: {
    gap: 16,
    marginBottom: 32,
  },
});

export default RegisterForm;
