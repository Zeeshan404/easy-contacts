import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import useLoadFonts from './src/hooks/useLoadFonts';
import { FontFamily } from './src/constants';
import OverlayLoader from './src/components/OverlayLoader';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  const { loading, error } = useLoadFonts()

  if (!loading) return (<OverlayLoader />)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

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

// import React, { useState } from 'react'
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { ActivityIndicator, I18nManager, StyleSheet, Text, View, Button } from 'react-native';
// import { _T } from './src/locales';
// import useLoadFonts from './src/hooks/useLoadFonts';
// import { FontFamily } from './src/constants';
// import * as Updates from 'expo-updates';


// export default function App() {

//   const { loading, error } = useLoadFonts()
//   const [RTL, setRTL] = useState(false)

//   // const shouldBeRTL = false;
//   // const shouldBeRTL = true;
//   // if (shouldBeRTL !== I18nManager.isRTL) {
//   //   I18nManager.allowRTL(shouldBeRTL);
//   //   I18nManager.forceRTL(shouldBeRTL);
//   //   Updates.reloadAsync();
//   // }

//   const toggleShift = () => {
//     const isRTL = I18nManager.isRTL ? false : true
//     setRTL(isRTL)
//     I18nManager.allowRTL(isRTL);
//     I18nManager.forceRTL(isRTL);
//     Updates.reloadAsync();
//   }

//   if (!loading) {
//     return (
//       <View style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' }}>
//         <ActivityIndicator
//           color="black"
//           size="large"
//         />
//       </View>
//     )
//   }
//   // return null

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={{ flex: 1, backgroundColor: 'tan', justifyContent: 'center', padding: 10 }}>
//         <Button
//           title='Toggle'
//           onPress={toggleShift}
//         />
//         <Text style={{ fontSize: 30, fontFamily: FontFamily.bold1, backgroundColor: 'red' }} > {_T("welcome")} </Text>
//         <Text style={{ fontSize: 30, fontFamily: FontFamily.bold1, backgroundColor: 'purple' }} >
//           {I18nManager.isRTL ? 'RTL' : 'LTR'}
//         </Text>
//         <View style={{ flexDirection: 'row', backgroundColor: 'pink' }}>
//           <View style={{ flex: 1, borderRightWidth: 5, borderColor: 'red' }}>
//             <Text style={{ fontSize: 20, fontFamily: FontFamily.bold1 }} > {_T("first")} </Text>
//           </View>
//           <View style={{ flex: 1, borderRightWidth: 5 }}>
//             <Text style={{ fontSize: 20, fontFamily: FontFamily.bold1 }} > {_T("second")} </Text>
//           </View>
//         </View>
//         <ContactListTile />
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// // {
// //   "compilerOptions": {
// //       "baseUrl": ".",
// //       "paths": {
// //           "locales/*": [
// //               "./src/locales/*"
// //           ],
// //       }
// //   }
// // }

// const ContactListTile = () => {
//   return (
//     <View style={{ height: 100, backgroundColor: 'pink', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
//       <View style={{ flex: 1, flexDirection: 'row' }}>
//         <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'white' }} />
//         <Text style={{ fontFamily: FontFamily.medium, fontSize: 15, backgroundColor: 'red' }}> {_T("name")}</Text>
//       </View>
//       <Text style={{ fontSize: 20, }}>{`>`}</Text>
//     </View>
//   )
// }