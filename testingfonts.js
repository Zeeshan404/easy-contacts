import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator, I18nManager, ScrollView, StyleSheet, View } from 'react-native';
import useLoadFonts from './src/hooks/useLoadFonts';
import { CombinedDarkTheme, CombinedDefaultTheme, FontFamily, SupportedLanguages, arabicFontVariants, englishFontVariants, nF } from './src/constants';
import OverlayLoader from './src/components/OverlayLoader';
import { Button, Divider, PaperProvider, Text, configureFonts, useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { _T, i18n, isLocaleRTL } from './src/locales';
import { useContext, useEffect, useState } from 'react';
import LocalizationContext from './src/context/localization';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  const { fonts } = useTheme()
  const { locale, rtl, onChangeLanguage } = useContext(LocalizationContext) || {}

  const fontSize = 30
  const innerText = _T("welcome")

  return (
    <View style={{ flex: 1, paddingHorizontal:10 }}>
      <View 
        style={{marginBottom:20}}
      />
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

      {/* <Text style={{fontSize:25}} variant='black'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='bold'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='medium'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='regular'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='thin'>{_T("name")}</Text> */}
      
    <ScrollView showsVerticalScrollIndicator={false}>

      <Text numberOfLines={1}  style={{fontSize:30, fontFamily:'eBlack', borderWidth:1}} >{innerText}</Text>
      <Text numberOfLines={1}  style={{fontSize:30, fontFamily:'eBold', borderWidth:1}} >{innerText}</Text>
      <Text numberOfLines={1}  style={{fontSize:30, fontFamily:'eMedium', borderWidth:1}} >{innerText}</Text>
      <Text numberOfLines={1}  style={{fontSize:30, fontFamily:'eRegular', borderWidth:1}} >{innerText}</Text>
      <Text numberOfLines={1}  style={{fontSize:30, fontFamily:'eThin', borderWidth:1}} >{innerText}</Text>

      <Divider style={{height:20}}/>
      
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'aBlack', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'aBold', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'aMedium', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'aRegular', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'aThin', borderWidth:1}} >{innerText}</Text>

      <Divider style={{height:20}}/>

      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'test1', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'test2', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'test3', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'test4', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'test5', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'test6', borderWidth:1}} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'test7', borderWidth:1}} >{innerText}</Text>

      <Divider style={{height:20}}/>

      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'uBlack', borderWidth:1, }} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'uBold', borderWidth:1, }} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'uMedium', borderWidth:1, }} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'uRegular', borderWidth:1, }} >{innerText}</Text>
      <Text  numberOfLines={1} style={{ fontSize:fontSize, fontFamily:'uThin', borderWidth:1, }} >{innerText}</Text>

    </ScrollView>

      {/* <Button onPress={()=>{}} mode="elevated" contentStyle={{ height:100, justifyContent:'center'}} style={{margin:20}}>
       <Text variant='black' style={{fontSize:nF(20), backgroundColor:'red', lineHeight:50 }}>
         {_T("name")}
        </Text>
      </Button> */}
      {/* 
      <Text>Context - {locale} - {rtl ? "RTL" : "LTR"}</Text>
      <Text>i18n - {i18n.locale} </Text>
      <Text>{'Native'} - {I18nManager.isRTL ? "RTL" : "LTR"}</Text>
      <Text onPress={()=>{props.navigation.navigate('Details')}} style={{backgroundColor:'red'}} variant="displayLarge">{_T("welcome")}</Text> */}
      {/* <Text style={{ fontSize: 18,fontFamily: urduFonts.uRegular, textAlign:'justify' }}>{_T("welcome")}</Text> */}
    
      {/* <Text style={{borderWidth:1}} variant='black' >{_T("name")}</Text>
      <Text style={{borderWidth:1}} variant='bold' >{_T("name")}</Text>
      <Text style={{borderWidth:1}} variant='medium' >{_T("name")}</Text>
      <Text style={{borderWidth:1}} variant='regular' >{_T("name")}</Text>  */}
      {/* 
      <Text style={{borderWidth:1, marginBottom:1}} variant="displayLarge">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="displayMedium">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="displaySmall">{_T("welcome")}</Text>

      <Text style={{borderWidth:1, marginBottom:1}} variant="headlineLarge">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="headlineMedium">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="headlineSmall">{_T("welcome")}</Text>

      <Text style={{borderWidth:1, marginBottom:1}} variant="titleLarge">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="titleMedium">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="titleSmall">{_T("welcome")}</Text>

      <Text style={{borderWidth:1, marginBottom:1}} variant="bodyLarge">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="bodyMedium">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="bodySmall">{_T("welcome")}</Text>

      <Text style={{borderWidth:1, marginBottom:1}} variant="labelLarge">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="labelMedium">{_T("welcome")}</Text>
      <Text style={{borderWidth:1, marginBottom:1}} variant="labelSmall">{_T("welcome")}</Text> */}
    </View>
  );
}

function DetailsScreen() {

  // const { locale, rtl, onChangeLanguage } = useContext(LocalizationContext) || {}
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:20 }}>
      {/* <Text style={{ marginBottom: 20 }}>{_T("welcome")}  {SupportedLanguages[locale]?.nativeName || 'test'}</Text> */}
      {/* <Text style={{ marginBottom: 20 }}>{locale}-{rtl ? "RTL":"LTR"}</Text> */}
      
    </View>
  );
}

export default function App() {
  const { loading, error } = useLoadFonts()
  const [localesInit, setLocalesInit] = useState(true)
  const localeContext = useContext(LocalizationContext)
  const [language, setLanguage] = useState(localeContext)

  useEffect(()=>{
    init()
  },[])

  const init = async () => {
    await AsyncStorage.getItem("language").then((json) => {
      if (json != null) {
        const value = JSON.parse(json).locale
        i18n.locale = value
        const shouldBeRTL = isLocaleRTL(value)
        const langData = {
          "locale" : value,
          "rtl" : shouldBeRTL
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
      "locale" : value,
      "rtl" : shouldBeRTL
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

  if(localesInit){
    return (
      <OverlayLoader />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LocalizationContext.Provider value={{ ...language, onChangeLanguage  }}>
        <PaperProvider theme={themeWithFonts}>
          <NavigationContainer theme={themeWithFonts}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
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