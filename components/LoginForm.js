import { Formik } from 'formik';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const LoginForm = () => {
  const [hide, setHide] = useState(true);
  const [onInputFocus, setOnInputFocus] = useState({
    email: false,
    password: false,
  });

  return (
    <Formik
      initialValues={{ login: '', email: '', password: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.inputField}>
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
                onInputFocus.password ? styles.onFocusInput : styles.onBlurInput
              }
              placeholder="Пароль"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={hide}
              onFocus={() =>
                setOnInputFocus(prevState => ({ ...prevState, password: true }))
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
          <Text style={styles.btn} onPress={handleSubmit}>
            Зареєстуватися
          </Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputField: {
    gap: 16,
  },

  onBlurInput: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  onFocusInput: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    borderColor: '#FF6C00',
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
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
    marginTop: 27,
  },
});

export default LoginForm;
