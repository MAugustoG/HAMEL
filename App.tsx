// ----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// ----------------------------------------------------------------------------
import { Text, StatusBar } from "native-base";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

// ----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// ----------------------------------------------------------------------------
import { THEME } from "@styles/theme";
import { Loader } from "@components/Loader";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Text>Hello World</Text> : <Loader />}
    </NativeBaseProvider>
  );
}
