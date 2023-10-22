import { View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </View>
  );
}
