import {
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import images from '../images/images';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <View>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <View style={styles.box}>
          <Text style={styles.titie}>Увійти</Text>

          <LoginForm />

          <Text style={styles.toLoginBtn}>Немає акаунту? Зареєструватися</Text>
        </View>
      </ImageBackground>
      <StatusBar theme="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 'auto',
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageBox: {
    position: 'relative',
    bottom: 60,
    alignSelf: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  image: {
    width: 120,
    height: 120,
  },
  addButton: {
    position: 'absolute',
    right: -12,
    bottom: 14,
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

export default LoginScreen;
