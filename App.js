import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { _T } from './src/locales';
import useLoadFonts from './src/hooks/useLoadFonts';
import { FontFamily } from './src/constants';

export default function App() {

  const { loading, error } = useLoadFonts()

  if (!loading) {
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
        alignItems: 'center',
      }}>

        <View style={{ height: 150, backgroundColor: 'teal', }}>
          <Text style={{ fontSize: 30, fontFamily: FontFamily.bold1, backgroundColor: 'red' }} > {_T("welcome")} </Text>
        </View>

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


// {
//   "compilerOptions": {
//       "baseUrl": ".",
//       "paths": {
//           "locales/*": [
//               "./src/locales/*"
//           ],
//       }
//   }
// }