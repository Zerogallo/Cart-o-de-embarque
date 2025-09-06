import { Home } from '@/app/home';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';

export default function App() {
    const [fontsLoaded] = useFonts({
    Poppins_700Bold, 
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_800ExtraBold,
  })

  if (!fontsLoaded) {
    return null
  }
  return (
  <Home/>
  );
}
