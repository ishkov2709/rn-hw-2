import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import images from '../images/images';
import RegisterForm from '../components/RegisterForm';
import AddPhoto from '../components/AddPhoto';

const RegistrationScreen = () => {
  return (
    <View>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.box}>
          <AddPhoto />

          <Text style={styles.titie}>Реєстрація</Text>

          <RegisterForm />

          <Text style={styles.toLoginBtn}>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
      <StatusBar theme="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  box: {
    marginTop: 'auto',
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',
    paddingLeft: 16,
    paddingRight: 16,
  },
  titie: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginBottom: 32,
  },
  toLoginBtn: {
    color: '#1B4371',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
