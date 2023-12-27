import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator, I18nManager, ScrollView, StyleSheet, View } from 'react-native';
import useLoadFonts from './src/hooks/useLoadFonts';
import { CombinedDarkTheme, CombinedDefaultTheme, FontFamily, SupportedLanguages, arabicFontVariants, englishFontVariants, nF } from './src/constants';
import OverlayLoader from './src/components/OverlayLoader';
import { Appbar, Button, Divider, PaperProvider, Text, configureFonts, useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { _T, i18n, isLocaleRTL } from './src/locales';
import { useContext, useEffect, useState } from 'react';
import LocalizationContext from './src/context/localization';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getHeaderTitle } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  const { fonts } = useTheme()
  const { locale, rtl, onChangeLanguage } = useContext(LocalizationContext) || {}

  return (
    <View style={{ flex: 1 }}>
      <Text>Context - {locale} - {rtl ? "RTL" : "LTR"}</Text>
      <Text>i18n - {i18n.locale} </Text>
      <Text>{'Native'} - {I18nManager.isRTL ? "RTL" : "LTR"}</Text>
      <Button mode="elevated">
        Go to details page
        {/* <Text variant='black'>Go to details</Text> */}
      </Button>
      {
        Object.keys(SupportedLanguages).map((item) => {
          return (
            <Button key={item} style={{ marginBottom: 15, width: '100%' }} mode="elevated" onPress={() => { onChangeLanguage(item) }}>
              <Text variant='black'>
              {SupportedLanguages[item].nativeName}
              </Text>
            </Button>
          )
        })
      }
      <Text variant='black'>{_T("welcome")}</Text>
    </View>
  );
}

function DetailsScreen() {

  // const { locale, rtl, onChangeLanguage } = useContext(LocalizationContext) || {}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      {/* <Text style={{ marginBottom: 20 }}>{_T("welcome")}  {SupportedLanguages[locale]?.nativeName || 'test'}</Text> */}
      {/* <Text style={{ marginBottom: 20 }}>{locale}-{rtl ? "RTL":"LTR"}</Text> */}
    </View>
  );
}


const CustomNavigationBar = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);
  const theme = useTheme()

  return (
    <Appbar.Header elevated mode="small" >
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} > </Appbar.Content>
    </Appbar.Header>
  );
}


export default function App() {
  const { loading, error } = useLoadFonts()
  const [localesInit, setLocalesInit] = useState(true)
  const localeContext = useContext(LocalizationContext)
  const [language, setLanguage] = useState(localeContext)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    await AsyncStorage.getItem("language").then((json) => {
      if (json != null) {
        const value = JSON.parse(json).locale
        i18n.locale = value
        const shouldBeRTL = isLocaleRTL(value)
        const langData = {
          "locale": value,
          "rtl": shouldBeRTL
        }
        if (shouldBeRTL !== I18nManager.isRTL) {
          I18nManager.allowRTL(shouldBeRTL);
          I18nManager.forceRTL(shouldBeRTL);
        }
        setLanguage(langData)
      }
    }).finally(() => {
      setLocalesInit(false)
    })
  }

  const onChangeLanguage = async (value) => {
    i18n.locale = value
    const shouldBeRTL = isLocaleRTL(value)
    const langData = {
      "locale": value,
      "rtl": shouldBeRTL
    }
    setLanguage(langData)
    if (shouldBeRTL !== I18nManager.isRTL) {
      I18nManager.allowRTL(shouldBeRTL);
      I18nManager.forceRTL(shouldBeRTL);
    }
    await AsyncStorage.setItem("language", JSON.stringify(langData))
    Updates.reloadAsync();
  }

  const isDarkTheme = false
  const currentTheme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme
  const fontConfigs = language?.rtl ? arabicFontVariants : englishFontVariants
  const themeWithFonts = {
    ...currentTheme,
    fonts: configureFonts({
      config: fontConfigs
    })
  }

  if (!loading) {
    return (
      <OverlayLoader />
    )
  }

  if (localesInit) {
    return (
      <OverlayLoader />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LocalizationContext.Provider value={{ ...language, onChangeLanguage }}>
        <PaperProvider theme={themeWithFonts}>
          <NavigationContainer theme={themeWithFonts}>
            <Stack.Navigator screenOptions={{ header: (props) => <CustomNavigationBar {...props} />, }}>
              <Stack.Screen name="Home" options={{headerTitle:_T("name1")}} component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </LocalizationContext.Provider>
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