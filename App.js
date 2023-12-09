import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  NotoNastaliqUrdu_400Regular,
  NotoNastaliqUrdu_500Medium,
  NotoNastaliqUrdu_600SemiBold,
  NotoNastaliqUrdu_700Bold,
} from '@expo-google-fonts/noto-nastaliq-urdu';

const fonts = {
  'R': NotoNastaliqUrdu_400Regular,
  'M': NotoNastaliqUrdu_500Medium,
  'B2': NotoNastaliqUrdu_600SemiBold,
  'B1': NotoNastaliqUrdu_700Bold,
}

export default function App() {

  const [fontLoaded, fontError] = useFonts({
    ...fonts
  })

  if (!fontLoaded) {
    return (
      <View style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator
          color="black"
          size="large"
        />
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{
        flex: 1, backgroundColor: 'tan',
        justifyContent: 'center',
        alignItemsL: 'center',
      }}>

        <Text
          style={{
            fontSize: 40,
            fontFamily: 'B2'
          }}
        >
          asdasdasdasd
          لکھن

        </Text>

      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});