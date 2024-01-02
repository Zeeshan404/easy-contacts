import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { I18nManager, View } from 'react-native';
import useLoadFonts from './src/hooks/useLoadFonts';
import { CombinedDarkTheme, CombinedDefaultTheme, arabicFontVariants, englishFontVariants } from './src/constants';
import OverlayLoader from './src/components/OverlayLoader';
import { Icon, IconButton, MD3Colors, PaperProvider, configureFonts } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { _T, i18n, isLocaleRTL } from './src/locales';
import { useContext, useEffect, useState } from 'react';
import LocalizationContext from './src/context/localization';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Root from './src/Root';

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
            <Root />
          </NavigationContainer>
        </PaperProvider>
      </LocalizationContext.Provider>
    </GestureHandlerRootView>
  );
}