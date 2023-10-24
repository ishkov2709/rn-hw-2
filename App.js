import { View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto': require('./src/assets/fonts/Roboto-Regular.ttf'),
    // prettier-ignore
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </View>
  );
}
