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
  let restProps = {
    numberOfLines:0
  }
  const styles = {
    borderWidth: 1,
  }

  function lineHeight(fontSize) {
    return parseInt(fontSize * 1.618);
  }
  return (
    <View style={{ flex: 1, paddingHorizontal:10 }}>
      <View 
        style={{marginBottom:20}}
      />
      

      {/* <Text style={{fontSize:25}} variant='black'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='bold'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='medium'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='regular'>{_T("name")}</Text>
      <Text style={{fontSize:25}} variant='thin'>{_T("name")}</Text> */}
      
    {/* <ScrollView showsVerticalScrollIndicator={false}>

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

    </ScrollView> */}

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
      
      

      <ScrollView style={{flex:1}}>
{/* 
        <Text {...restProps} style={{
          ...styles,
           fontFamily: 'uRegular',
          "letterSpacing": 0,
          "fontWeight": "400",
          // "lineHeight": 40,
          "lineHeight": 0,
          "fontSize": 32
        }} >
          {innerText}
        </Text> */}

      <Text {...restProps} style={{...styles}} variant="displayLarge">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="displayMedium">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="displaySmall">{innerText}</Text>

      <Divider style={{height:40}}/>

      <Text {...restProps} style={{...styles}} variant="headlineLarge">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="headlineMedium">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="headlineSmall">{innerText}</Text>

      <Divider style={{height:40}}/>

      <Text {...restProps} style={{...styles}} variant="titleLarge">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="titleMedium">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="titleSmall">{innerText}</Text>

      <Divider style={{height:40}}/>

      <Text {...restProps} style={{...styles}} variant="labelLarge">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="labelMedium">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="labelSmall">{innerText}</Text>

      <Divider style={{height:40}}/>
      
      <Text {...restProps} style={{...styles}} variant="bodyLarge">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="bodyMedium">{innerText}</Text>
      <Text {...restProps} style={{...styles}} variant="bodySmall">{innerText}</Text>


  
      {/* <Text variant="displayLarge">Display Large</Text>
      <Text variant="displayMedium">Display Medium</Text>
      <Text variant="displaySmall">Display small</Text>

      <Text variant="headlineLarge">Headline Large</Text>
      <Text variant="headlineMedium">Headline Medium</Text>
      <Text variant="headlineSmall">Headline Small</Text>

      <Text variant="titleLarge">Title Large</Text>
      <Text variant="titleMedium">Title Medium</Text>
      <Text variant="titleSmall">Title Small</Text>

      <Text variant="labelLarge">Label Large</Text>
      <Text variant="labelMedium">Label Medium</Text>
      <Text variant="labelSmall">Label Small</Text>

      <Text variant="bodyLarge">Body Large</Text>
      <Text variant="bodyMedium">Body Medium</Text>
      <Text variant="bodySmall">Body Small</Text> */}

      </ScrollView>

      {
        Object.keys(SupportedLanguages).map((item) => {
          return (
            <Button key={item} style={{ marginBottom: 15, width: '100%' }} mode="elevated" onPress={() => { onChangeLanguage(item) }}>
              {SupportedLanguages[item].nativeName}
            </Button>
          )
        })
      }
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
              {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </LocalizationContext.Provider>
    </GestureHandlerRootView>
  );
}




// import { Dimensions, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Spacing } from './src/utils/design'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useTheme } from 'react-native-paper'
// import { hScale } from './src/utils/dimension'

// const App = () => {

//   const theme = useTheme()
  

//   return (
//     <SafeAreaView style={{flex:1, backgroundColor:'tan', justifyContent:'center', alignItems:'center'}}>
//       <View style={{ width: 50, height: Spacing.vertical.xs2, backgroundColor:'red' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.xs, backgroundColor: 'green' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.s, backgroundColor: 'blue' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.m, backgroundColor: 'black' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.l, backgroundColor: 'white' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.xl, backgroundColor: 'pink' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.xl2, backgroundColor: 'gold' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.xl3, backgroundColor: 'yellow' }}></View>
//       <View style={{ width: 50, height: Spacing.vertical.xl4, backgroundColor: 'teal' }}></View>
    
//       <View style={{ height: 50, width: Spacing.vertical.xs2, backgroundColor:'red' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.xs, backgroundColor: 'green' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.s, backgroundColor: 'blue' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.m, backgroundColor: 'black' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.l, backgroundColor: 'white' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.xl, backgroundColor: 'pink' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.xl2, backgroundColor: 'gold' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.xl3, backgroundColor: 'yellow' }}></View>
//       <View style={{ height: 50, width: Spacing.vertical.xl4, backgroundColor: 'teal' }}></View>

//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({

// })