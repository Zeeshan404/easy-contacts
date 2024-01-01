import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { MD3LightTheme, MD3DarkTheme, adaptNavigationTheme, configureFonts } from 'react-native-paper';
import {
    NotoNastaliqUrdu_400Regular,
    NotoNastaliqUrdu_500Medium,
    NotoNastaliqUrdu_600SemiBold,
    NotoNastaliqUrdu_700Bold,
} from '@expo-google-fonts/noto-nastaliq-urdu';
import {
    Lato_100Thin, 
    // Lato_100Thin_Italic, 
    Lato_300Light, 
    // Lato_300Light_Italic, 
    Lato_400Regular, 
    // Lato_400Regular_Italic, 
    Lato_700Bold, 
    // Lato_700Bold_Italic, 
    Lato_900Black, 
    // Lato_900Black_Italic
} from '@expo-google-fonts/lato'
import {
    NotoNaskhArabic_400Regular, 
    NotoNaskhArabic_500Medium, 
    NotoNaskhArabic_600SemiBold, 
    NotoNaskhArabic_700Bold
} from '@expo-google-fonts/noto-naskh-arabic'
import { Platform } from 'react-native';

export const urduFonts = {
    'uRegular': {
        family : 'uRegular', 
        asset : NotoNastaliqUrdu_400Regular
    },
    'uMedium': {
        family : 'uMedium', 
        asset : NotoNastaliqUrdu_500Medium
    },
    'uBold': {
        family : 'uBold', 
        asset : NotoNastaliqUrdu_600SemiBold
    },
    'uBlack': {
        family : 'uBlack', 
        asset : NotoNastaliqUrdu_700Bold
    },
    'uThin': {
        family : 'uThin', 
        asset : NotoNastaliqUrdu_400Regular
    },
}


export const arabicFonts = {
    'aRegular': {
        family : 'aRegular', 
        // asset : NotoNaskhArabic_400Regular
        asset : NotoNastaliqUrdu_400Regular
    },
    'aMedium': {
        family : 'aMedium', 
        // asset : NotoNaskhArabic_500Medium
        asset : NotoNastaliqUrdu_500Medium
    },
    'aBold': {
        family : 'aBold', 
        // asset : NotoNaskhArabic_600SemiBold
        asset : NotoNastaliqUrdu_600SemiBold
    },
    'aBlack': {
        family : 'aBlack', 
        // asset : NotoNaskhArabic_700Bold
        asset : NotoNastaliqUrdu_700Bold
    },
    'aThin': {
        family : 'aThin', 
        // asset : NotoNaskhArabic_400Regular
        asset : NotoNastaliqUrdu_400Regular
    },
}

export const englishFonts = {
    'eThin': {
        family : 'eThin', 
        asset : Lato_100Thin
    },
    'eMedium': {
        family : 'eMedium', 
        asset : Lato_400Regular
    },
    'eRegular': {
        family : 'eRegular', 
        asset : Lato_300Light
    },
    'eBold': {
        family : 'eBold', 
        asset : Lato_700Bold
    },
    'eBlack': {
        family : 'eBlack', 
        asset : Lato_900Black
    },
}

export const englishFontVariants = {
    "displayLarge": {
        "fontFamily": englishFonts.eBlack.family,
        "letterSpacing": 0,
        "fontWeight": "400",
        "lineHeight": 64,
        "fontSize": 57
    },
    "displayMedium": {
        "fontFamily": englishFonts.eBlack.family,
        "letterSpacing": 0,
        "fontWeight": "400",
        "lineHeight": 52,
        "fontSize": 45
    },
    "displaySmall": {
        "fontFamily": englishFonts.eBlack.family,
        "letterSpacing": 0,
        "fontWeight": "400",
        "lineHeight": 44,
        "fontSize": 36
    },


    "headlineLarge": {
        "fontFamily": englishFonts.eBold.family,
        "letterSpacing": 0,
        "fontWeight": "400",
        "lineHeight": 40,
        "fontSize": 32
    },
    "headlineMedium": {
        "fontFamily": englishFonts.eBold.family,
        "letterSpacing": 0,
        "fontWeight": "400",
        "lineHeight": 36,
        "fontSize": 28
    },
    "headlineSmall": {
        "fontFamily": englishFonts.eBold.family,
        "letterSpacing": 0,
        "fontWeight": "400",
        "lineHeight": 32,
        "fontSize": 24
    },


    "titleLarge": {
        "fontFamily": englishFonts.eMedium.family,
        "letterSpacing": 0,
        "fontWeight": "400",
        "lineHeight": 28,
        "fontSize": 22
    },
    "titleMedium": {
        "fontFamily": englishFonts.eMedium.family,
        "letterSpacing": 0.15,
        "fontWeight": "500",
        "lineHeight": 24,
        "fontSize": 16
    },
    "titleSmall": {
        "fontFamily": englishFonts.eMedium.family,
        "letterSpacing": 0.1,
        "fontWeight": "500",
        "lineHeight": 20,
        "fontSize": 14
    },

    "labelLarge": {
        "fontFamily": englishFonts.eMedium.family,
        "letterSpacing": 0.1,
        "fontWeight": "500",
        "lineHeight": 20,
        "fontSize": 14
    },
    "labelMedium": {
        "fontFamily": englishFonts.eMedium.family,
        "letterSpacing": 0.5,
        "fontWeight": "500",
        "lineHeight": 16,
        "fontSize": 12
    },
    "labelSmall": {
        "fontFamily": englishFonts.eMedium.family,
        "letterSpacing": 0.5,
        "fontWeight": "500",
        "lineHeight": 16,
        "fontSize": 11
    },

    "bodyLarge": {
        "fontFamily": englishFonts.eRegular.family,
        "letterSpacing": 0.15,
        "fontWeight": "400",
        "lineHeight": 24,
        "fontSize": 16
    },
    "bodyMedium": {
        "fontFamily": englishFonts.eRegular.family,
        "letterSpacing": 0.25,
        "fontWeight": "400",
        "lineHeight": 20,
        "fontSize": 14
    },
    "bodySmall": {
        "fontFamily": englishFonts.eRegular.family,
        "letterSpacing": 0.4,
        "fontWeight": "400",
        "lineHeight": 16,
        "fontSize": 12
    },

    "default": {
        // "fontFamily": "sans-serif",
        "letterSpacing": 0,
        "fontWeight": "400"
    }
    // black: {
    //     fontFamily: englishFonts.eBlack.family,
    //     // fontSize: 57,
    // },
    // bold: {
    //     fontFamily: englishFonts.eBold.family,
    //     // fontSize: 32,
    // },
    // medium: {
    //     fontFamily: englishFonts.eMedium.family,
    //     // fontSize: 22,
    // },
    // regular: {
    //     fontFamily: englishFonts.eRegular.family,
    //     // fontSize: 16,
    // },
    // thin : {
    //     fontFamily: englishFonts.eThin.family,
    //     // fontSize: 16,  
    // }
}

const fontStyles = (fontSize)=>{
    return {
        fontSize : fontSize, 
        letterSpacing: 0,
        lineHeight : Platform.select({
            'android': fontSize * 2.5, 
            "ios": 0
        }),
    }
}

export const arabicFontVariants = {
    "displayLarge": {
        "fontFamily": arabicFonts.aBlack.family,
        ...fontStyles(57)
    },
    "displayMedium": {
        "fontFamily": arabicFonts.aBlack.family,
        ...fontStyles(45)
    },
    "displaySmall": {
        "fontFamily": arabicFonts.aBlack.family,
        ...fontStyles(36)
    },

    "headlineLarge": {
        "fontFamily": arabicFonts.aBold.family,
        ...fontStyles(32)
    },
    "headlineMedium": {
        "fontFamily": arabicFonts.aBold.family,
        
        ...fontStyles(28)
    },
    "headlineSmall": {
        "fontFamily": arabicFonts.aBold.family,
        ...fontStyles(24)
    },

    "titleLarge": {
        "fontFamily": arabicFonts.aMedium.family,
        ...fontStyles(22)
    },
    "titleMedium": {
        "fontFamily": arabicFonts.aMedium.family,
        ...fontStyles(16)
    },
    "titleSmall": {
        "fontFamily": arabicFonts.aMedium.family,
        ...fontStyles(14)
    },

    "labelLarge": {
        "fontFamily": arabicFonts.aRegular.family,
        ...fontStyles(14)
    },
    "labelMedium": {
        "fontFamily": arabicFonts.aRegular.family,
        ...fontStyles(12)
    },
    "labelSmall": {
        "fontFamily": arabicFonts.aRegular.family,
        ...fontStyles(11)
    },

    "bodyLarge": {
        "fontFamily": arabicFonts.aThin.family,
        ...fontStyles(16)
    },
    "bodyMedium": {
        "fontFamily": arabicFonts.aThin.family,
        ...fontStyles(14)
    },
    "bodySmall": {
        "fontFamily": arabicFonts.aThin.family,
        ...fontStyles(12)
    },
    // black: {
    //     fontFamily: arabicFonts.aBlack.family,
    //     // fontSize: 57,
    // },
    // bold: {
    //     fontFamily: arabicFonts.aBold.family,
    //     // fontSize: 32,
    // },
    // medium: {
    //     fontFamily: arabicFonts.aMedium.family,
    //     // fontSize: 22,
    // },
    // regular: {
    //     fontFamily: arabicFonts.aRegular.family,
    //     // fontSize: 16,
    // },
    // thin : {
    //     fontFamily: arabicFonts.aThin.family,
    //     // fontSize: 12, 
    // }
}

export const urduFontVariants = {
    black: {
        fontFamily: urduFonts.uBlack.family,
    },
    bold: {
        fontFamily: urduFonts.uBold.family,
    },
    medium: {
        fontFamily: urduFonts.uMedium.family,
    },
    regular: {
        fontFamily: urduFonts.uRegular.family,
    },
    thin : {
        fontFamily: urduFonts.uThin.family,
    }
}


const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

export const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...LightTheme.colors,
        // ...{
        //     "primary": "rgb(0, 104, 116)",
        //     "onPrimary": "rgb(255, 255, 255)",
        //     "primaryContainer": "rgb(151, 240, 255)",
        //     "onPrimaryContainer": "rgb(0, 31, 36)",
        //     "secondary": "rgb(74, 98, 103)",
        //     "onSecondary": "rgb(255, 255, 255)",
        //     "secondaryContainer": "rgb(205, 231, 236)",
        //     "onSecondaryContainer": "rgb(5, 31, 35)",
        //     "tertiary": "rgb(82, 94, 125)",
        //     "onTertiary": "rgb(255, 255, 255)",
        //     "tertiaryContainer": "rgb(218, 226, 255)",
        //     "onTertiaryContainer": "rgb(14, 27, 55)",
        //     "error": "rgb(186, 26, 26)",
        //     "onError": "rgb(255, 255, 255)",
        //     "errorContainer": "rgb(255, 218, 214)",
        //     "onErrorContainer": "rgb(65, 0, 2)",
        //     "background": "rgb(250, 253, 253)",
        //     "onBackground": "rgb(25, 28, 29)",
        //     "surface": "rgb(250, 253, 253)",
        //     "onSurface": "rgb(25, 28, 29)",
        //     "surfaceVariant": "rgb(219, 228, 230)",
        //     "onSurfaceVariant": "rgb(63, 72, 74)",
        //     "outline": "rgb(111, 121, 122)",
        //     "outlineVariant": "rgb(191, 200, 202)",
        //     "shadow": "rgb(0, 0, 0)",
        //     "scrim": "rgb(0, 0, 0)",
        //     "inverseSurface": "rgb(46, 49, 50)",
        //     "inverseOnSurface": "rgb(239, 241, 241)",
        //     "inversePrimary": "rgb(79, 216, 235)",
        //     "elevation": {
        //         "level0": "transparent",
        //         "level1": "rgb(238, 246, 246)",
        //         "level2": "rgb(230, 241, 242)",
        //         "level3": "rgb(223, 237, 238)",
        //         "level4": "rgb(220, 235, 237)",
        //         "level5": "rgb(215, 232, 234)"
        //     },
        //     "surfaceDisabled": "rgba(25, 28, 29, 0.12)",
        //     "onSurfaceDisabled": "rgba(25, 28, 29, 0.38)",
        //     "backdrop": "rgba(41, 50, 52, 0.4)"
        // }
    }
};

export const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...DarkTheme.colors,
        // ...{
        //     "primary": "rgb(79, 216, 235)",
        //     "onPrimary": "rgb(0, 54, 61)",
        //     "primaryContainer": "rgb(0, 79, 88)",
        //     "onPrimaryContainer": "rgb(151, 240, 255)",
        //     "secondary": "rgb(177, 203, 208)",
        //     "onSecondary": "rgb(28, 52, 56)",
        //     "secondaryContainer": "rgb(51, 75, 79)",
        //     "onSecondaryContainer": "rgb(205, 231, 236)",
        //     "tertiary": "rgb(186, 198, 234)",
        //     "onTertiary": "rgb(36, 48, 77)",
        //     "tertiaryContainer": "rgb(59, 70, 100)",
        //     "onTertiaryContainer": "rgb(218, 226, 255)",
        //     "error": "rgb(255, 180, 171)",
        //     "onError": "rgb(105, 0, 5)",
        //     "errorContainer": "rgb(147, 0, 10)",
        //     "onErrorContainer": "rgb(255, 180, 171)",
        //     "background": "rgb(25, 28, 29)",
        //     "onBackground": "rgb(225, 227, 227)",
        //     "surface": "rgb(25, 28, 29)",
        //     "onSurface": "rgb(225, 227, 227)",
        //     "surfaceVariant": "rgb(63, 72, 74)",
        //     "onSurfaceVariant": "rgb(191, 200, 202)",
        //     "outline": "rgb(137, 146, 148)",
        //     "outlineVariant": "rgb(63, 72, 74)",
        //     "shadow": "rgb(0, 0, 0)",
        //     "scrim": "rgb(0, 0, 0)",
        //     "inverseSurface": "rgb(225, 227, 227)",
        //     "inverseOnSurface": "rgb(46, 49, 50)",
        //     "inversePrimary": "rgb(0, 104, 116)",
        //     "elevation": {
        //         "level0": "transparent",
        //         "level1": "rgb(28, 37, 39)",
        //         "level2": "rgb(29, 43, 46)",
        //         "level3": "rgb(31, 49, 52)",
        //         "level4": "rgb(32, 51, 54)",
        //         "level5": "rgb(33, 54, 58)"
        //     },
        //     "surfaceDisabled": "rgba(225, 227, 227, 0.12)",
        //     "onSurfaceDisabled": "rgba(225, 227, 227, 0.38)",
        //     "backdrop": "rgba(41, 50, 52, 0.4)"
        // }
    }
};

const LanguageList = {
    "ab": {
        "name": "Abkhaz",
        "nativeName": "аҧсуа",
        "code": "ab"
    },
    "aa": {
        "name": "Afar",
        "nativeName": "Afaraf",
        "code": "aa"
    },
    "af": {
        "name": "Afrikaans",
        "nativeName": "Afrikaans",
        "code": "af"
    },
    "ak": {
        "name": "Akan",
        "nativeName": "Akan",
        "code": "ak"
    },
    "sq": {
        "name": "Albanian",
        "nativeName": "Shqip",
        "code": "sq"
    },
    "am": {
        "name": "Amharic",
        "nativeName": "አማርኛ",
        "code": "am"
    },
    "ar": {
        "name": "Arabic",
        "nativeName": "العربية",
        "code": "ar"
    },
    "an": {
        "name": "Aragonese",
        "nativeName": "Aragonés",
        "code": "an"
    },
    "hy": {
        "name": "Armenian",
        "nativeName": "Հայերեն",
        "code": "hy"
    },
    "as": {
        "name": "Assamese",
        "nativeName": "অসমীয়া",
        "code": "as"
    },
    "av": {
        "name": "Avaric",
        "nativeName": "авар мацӀ, магӀарул мацӀ",
        "code": "av"
    },
    "ae": {
        "name": "Avestan",
        "nativeName": "avesta",
        "code": "ae"
    },
    "ay": {
        "name": "Aymara",
        "nativeName": "aymar aru",
        "code": "ay"
    },
    "az": {
        "name": "Azerbaijani",
        "nativeName": "azərbaycan dili",
        "code": "az"
    },
    "bm": {
        "name": "Bambara",
        "nativeName": "bamanankan",
        "code": "bm"
    },
    "ba": {
        "name": "Bashkir",
        "nativeName": "башҡорт теле",
        "code": "ba"
    },
    "eu": {
        "name": "Basque",
        "nativeName": "euskara, euskera",
        "code": "eu"
    },
    "be": {
        "name": "Belarusian",
        "nativeName": "Беларуская",
        "code": "be"
    },
    "bn": {
        "name": "Bengali",
        "nativeName": "বাংলা",
        "code": "bn"
    },
    "bh": {
        "name": "Bihari",
        "nativeName": "भोजपुरी",
        "code": "bh"
    },
    "bi": {
        "name": "Bislama",
        "nativeName": "Bislama",
        "code": "bi"
    },
    "bs": {
        "name": "Bosnian",
        "nativeName": "bosanski jezik",
        "code": "bs"
    },
    "br": {
        "name": "Breton",
        "nativeName": "brezhoneg",
        "code": "br"
    },
    "bg": {
        "name": "Bulgarian",
        "nativeName": "български език",
        "code": "bg"
    },
    "my": {
        "name": "Burmese",
        "nativeName": "ဗမာစာ",
        "code": "my"
    },
    "ca": {
        "name": "Catalan; Valencian",
        "nativeName": "Català",
        "code": "ca"
    },
    "ch": {
        "name": "Chamorro",
        "nativeName": "Chamoru",
        "code": "ch"
    },
    "ce": {
        "name": "Chechen",
        "nativeName": "нохчийн мотт",
        "code": "ce"
    },
    "ny": {
        "name": "Chichewa; Chewa; Nyanja",
        "nativeName": "chiCheŵa, chinyanja",
        "code": "ny"
    },
    "zh": {
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén), 汉语, 漢語",
        "code": "zh"
    },
    "cv": {
        "name": "Chuvash",
        "nativeName": "чӑваш чӗлхи",
        "code": "cv"
    },
    "kw": {
        "name": "Cornish",
        "nativeName": "Kernewek",
        "code": "kw"
    },
    "co": {
        "name": "Corsican",
        "nativeName": "corsu, lingua corsa",
        "code": "co"
    },
    "cr": {
        "name": "Cree",
        "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ",
        "code": "cr"
    },
    "hr": {
        "name": "Croatian",
        "nativeName": "hrvatski",
        "code": "hr"
    },
    "cs": {
        "name": "Czech",
        "nativeName": "česky, čeština",
        "code": "cs"
    },
    "da": {
        "name": "Danish",
        "nativeName": "dansk",
        "code": "da"
    },
    "dv": {
        "name": "Divehi; Dhivehi; Maldivian;",
        "nativeName": "ދިވެހި",
        "code": "dv"
    },
    "nl": {
        "name": "Dutch",
        "nativeName": "Nederlands, Vlaams",
        "code": "nl"
    },
    "en": {
        "name": "English",
        "nativeName": "English",
        "code": "en"
    },
    "eo": {
        "name": "Esperanto",
        "nativeName": "Esperanto",
        "code": "eo"
    },
    "et": {
        "name": "Estonian",
        "nativeName": "eesti, eesti keel",
        "code": "et"
    },
    "ee": {
        "name": "Ewe",
        "nativeName": "Eʋegbe",
        "code": "ee"
    },
    "fo": {
        "name": "Faroese",
        "nativeName": "føroyskt",
        "code": "fo"
    },
    "fj": {
        "name": "Fijian",
        "nativeName": "vosa Vakaviti",
        "code": "fj"
    },
    "fi": {
        "name": "Finnish",
        "nativeName": "suomi, suomen kieli",
        "code": "fi"
    },
    "fr": {
        "name": "French",
        "nativeName": "français, langue française",
        "code": "fr"
    },
    "ff": {
        "name": "Fula; Fulah; Pulaar; Pular",
        "nativeName": "Fulfulde, Pulaar, Pular",
        "code": "ff"
    },
    "gl": {
        "name": "Galician",
        "nativeName": "Galego",
        "code": "gl"
    },
    "ka": {
        "name": "Georgian",
        "nativeName": "ქართული",
        "code": "ka"
    },
    "de": {
        "name": "German",
        "nativeName": "Deutsch",
        "code": "de"
    },
    "el": {
        "name": "Greek, Modern",
        "nativeName": "Ελληνικά",
        "code": "el"
    },
    "gn": {
        "name": "Guaraní",
        "nativeName": "Avañeẽ",
        "code": "gn"
    },
    "gu": {
        "name": "Gujarati",
        "nativeName": "ગુજરાતી",
        "code": "gu"
    },
    "ht": {
        "name": "Haitian; Haitian Creole",
        "nativeName": "Kreyòl ayisyen",
        "code": "ht"
    },
    "ha": {
        "name": "Hausa",
        "nativeName": "Hausa, هَوُسَ",
        "code": "ha"
    },
    "he": {
        "name": "Hebrew (modern)",
        "nativeName": "עברית",
        "code": "he"
    },
    "hz": {
        "name": "Herero",
        "nativeName": "Otjiherero",
        "code": "hz"
    },
    "hi": {
        "name": "Hindi",
        "nativeName": "हिन्दी, हिंदी",
        "code": "hi"
    },
    "ho": {
        "name": "Hiri Motu",
        "nativeName": "Hiri Motu",
        "code": "ho"
    },
    "hu": {
        "name": "Hungarian",
        "nativeName": "Magyar",
        "code": "hu"
    },
    "ia": {
        "name": "Interlingua",
        "nativeName": "Interlingua",
        "code": "ia"
    },
    "id": {
        "name": "Indonesian",
        "nativeName": "Bahasa Indonesia",
        "code": "id"
    },
    "ie": {
        "name": "Interlingue",
        "nativeName": "Originally called Occidental; then Interlingue after WWII",
        "code": "ie"
    },
    "ga": {
        "name": "Irish",
        "nativeName": "Gaeilge",
        "code": "ga"
    },
    "ig": {
        "name": "Igbo",
        "nativeName": "Asụsụ Igbo",
        "code": "ig"
    },
    "ik": {
        "name": "Inupiaq",
        "nativeName": "Iñupiaq, Iñupiatun",
        "code": "ik"
    },
    "io": {
        "name": "Ido",
        "nativeName": "Ido",
        "code": "io"
    },
    "is": {
        "name": "Icelandic",
        "nativeName": "Íslenska",
        "code": "is"
    },
    "it": {
        "name": "Italian",
        "nativeName": "Italiano",
        "code": "it"
    },
    "iu": {
        "name": "Inuktitut",
        "nativeName": "ᐃᓄᒃᑎᑐᑦ",
        "code": "iu"
    },
    "ja": {
        "name": "Japanese",
        "nativeName": "日本語 (にほんご／にっぽんご)",
        "code": "ja"
    },
    "jv": {
        "name": "Javanese",
        "nativeName": "basa Jawa",
        "code": "jv"
    },
    "kl": {
        "name": "Kalaallisut, Greenlandic",
        "nativeName": "kalaallisut, kalaallit oqaasii",
        "code": "kl"
    },
    "kn": {
        "name": "Kannada",
        "nativeName": "ಕನ್ನಡ",
        "code": "kn"
    },
    "kr": {
        "name": "Kanuri",
        "nativeName": "Kanuri",
        "code": "kr"
    },
    "ks": {
        "name": "Kashmiri",
        "nativeName": "कश्मीरी, كشميري‎",
        "code": "ks"
    },
    "kk": {
        "name": "Kazakh",
        "nativeName": "Қазақ тілі",
        "code": "kk"
    },
    "km": {
        "name": "Khmer",
        "nativeName": "ភាសាខ្មែរ",
        "code": "km"
    },
    "ki": {
        "name": "Kikuyu, Gikuyu",
        "nativeName": "Gĩkũyũ",
        "code": "ki"
    },
    "rw": {
        "name": "Kinyarwanda",
        "nativeName": "Ikinyarwanda",
        "code": "rw"
    },
    "ky": {
        "name": "Kirghiz, Kyrgyz",
        "nativeName": "кыргыз тили",
        "code": "ky"
    },
    "kv": {
        "name": "Komi",
        "nativeName": "коми кыв",
        "code": "kv"
    },
    "kg": {
        "name": "Kongo",
        "nativeName": "KiKongo",
        "code": "kg"
    },
    "ko": {
        "name": "Korean",
        "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)",
        "code": "ko"
    },
    "ku": {
        "name": "Kurdish",
        "nativeName": "Kurdî, كوردی‎",
        "code": "ku"
    },
    "kj": {
        "name": "Kwanyama, Kuanyama",
        "nativeName": "Kuanyama",
        "code": "kj"
    },
    "la": {
        "name": "Latin",
        "nativeName": "latine, lingua latina",
        "code": "la"
    },
    "lb": {
        "name": "Luxembourgish, Letzeburgesch",
        "nativeName": "Lëtzebuergesch",
        "code": "lb"
    },
    "lg": {
        "name": "Luganda",
        "nativeName": "Luganda",
        "code": "lg"
    },
    "li": {
        "name": "Limburgish, Limburgan, Limburger",
        "nativeName": "Limburgs",
        "code": "li"
    },
    "ln": {
        "name": "Lingala",
        "nativeName": "Lingála",
        "code": "ln"
    },
    "lo": {
        "name": "Lao",
        "nativeName": "ພາສາລາວ",
        "code": "lo"
    },
    "lt": {
        "name": "Lithuanian",
        "nativeName": "lietuvių kalba",
        "code": "lt"
    },
    "lu": {
        "name": "Luba-Katanga",
        "nativeName": "",
        "code": "lu"
    },
    "lv": {
        "name": "Latvian",
        "nativeName": "latviešu valoda",
        "code": "lv"
    },
    "gv": {
        "name": "Manx",
        "nativeName": "Gaelg, Gailck",
        "code": "gv"
    },
    "mk": {
        "name": "Macedonian",
        "nativeName": "македонски јазик",
        "code": "mk"
    },
    "mg": {
        "name": "Malagasy",
        "nativeName": "Malagasy fiteny",
        "code": "mg"
    },
    "ms": {
        "name": "Malay",
        "nativeName": "bahasa Melayu, بهاس ملايو‎",
        "code": "ms"
    },
    "ml": {
        "name": "Malayalam",
        "nativeName": "മലയാളം",
        "code": "ml"
    },
    "mt": {
        "name": "Maltese",
        "nativeName": "Malti",
        "code": "mt"
    },
    "mi": {
        "name": "Māori",
        "nativeName": "te reo Māori",
        "code": "mi"
    },
    "mr": {
        "name": "Marathi (Marāṭhī)",
        "nativeName": "मराठी",
        "code": "mr"
    },
    "mh": {
        "name": "Marshallese",
        "nativeName": "Kajin M̧ajeļ",
        "code": "mh"
    },
    "mn": {
        "name": "Mongolian",
        "nativeName": "монгол",
        "code": "mn"
    },
    "na": {
        "name": "Nauru",
        "nativeName": "Ekakairũ Naoero",
        "code": "na"
    },
    "nv": {
        "name": "Navajo, Navaho",
        "nativeName": "Diné bizaad, Dinékʼehǰí",
        "code": "nv"
    },
    "nb": {
        "name": "Norwegian Bokmål",
        "nativeName": "Norsk bokmål",
        "code": "nb"
    },
    "nd": {
        "name": "North Ndebele",
        "nativeName": "isiNdebele",
        "code": "nd"
    },
    "ne": {
        "name": "Nepali",
        "nativeName": "नेपाली",
        "code": "ne"
    },
    "ng": {
        "name": "Ndonga",
        "nativeName": "Owambo",
        "code": "ng"
    },
    "nn": {
        "name": "Norwegian Nynorsk",
        "nativeName": "Norsk nynorsk",
        "code": "nn"
    },
    "no": {
        "name": "Norwegian",
        "nativeName": "Norsk",
        "code": "no"
    },
    "ii": {
        "name": "Nuosu",
        "nativeName": "ꆈꌠ꒿ Nuosuhxop",
        "code": "ii"
    },
    "nr": {
        "name": "South Ndebele",
        "nativeName": "isiNdebele",
        "code": "nr"
    },
    "oc": {
        "name": "Occitan",
        "nativeName": "Occitan",
        "code": "oc"
    },
    "oj": {
        "name": "Ojibwe, Ojibwa",
        "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ",
        "code": "oj"
    },
    "cu": {
        "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
        "nativeName": "ѩзыкъ словѣньскъ",
        "code": "cu"
    },
    "om": {
        "name": "Oromo",
        "nativeName": "Afaan Oromoo",
        "code": "om"
    },
    "or": {
        "name": "Oriya",
        "nativeName": "ଓଡ଼ିଆ",
        "code": "or"
    },
    "os": {
        "name": "Ossetian, Ossetic",
        "nativeName": "ирон æвзаг",
        "code": "os"
    },
    "pa": {
        "name": "Panjabi, Punjabi",
        "nativeName": "ਪੰਜਾਬੀ, پنجابی‎",
        "code": "pa"
    },
    "pi": {
        "name": "Pāli",
        "nativeName": "पाऴि",
        "code": "pi"
    },
    "fa": {
        "name": "Persian",
        "nativeName": "فارسی",
        "code": "fa"
    },
    "pl": {
        "name": "Polish",
        "nativeName": "polski",
        "code": "pl"
    },
    "ps": {
        "name": "Pashto, Pushto",
        "nativeName": "پښتو",
        "code": "ps"
    },
    "pt": {
        "name": "Portuguese",
        "nativeName": "Português",
        "code": "pt"
    },
    "qu": {
        "name": "Quechua",
        "nativeName": "Runa Simi, Kichwa",
        "code": "qu"
    },
    "rm": {
        "name": "Romansh",
        "nativeName": "rumantsch grischun",
        "code": "rm"
    },
    "rn": {
        "name": "Kirundi",
        "nativeName": "kiRundi",
        "code": "rn"
    },
    "ro": {
        "name": "Romanian, Moldavian, Moldovan",
        "nativeName": "română",
        "code": "ro"
    },
    "ru": {
        "name": "Russian",
        "nativeName": "русский язык",
        "code": "ru"
    },
    "sa": {
        "name": "Sanskrit (Saṁskṛta)",
        "nativeName": "संस्कृतम्",
        "code": "sa"
    },
    "sc": {
        "name": "Sardinian",
        "nativeName": "sardu",
        "code": "sc"
    },
    "sd": {
        "name": "Sindhi",
        "nativeName": "सिन्धी, سنڌي، سندھی‎",
        "code": "sd"
    },
    "se": {
        "name": "Northern Sami",
        "nativeName": "Davvisámegiella",
        "code": "se"
    },
    "sm": {
        "name": "Samoan",
        "nativeName": "gagana faa Samoa",
        "code": "sm"
    },
    "sg": {
        "name": "Sango",
        "nativeName": "yângâ tî sängö",
        "code": "sg"
    },
    "sr": {
        "name": "Serbian",
        "nativeName": "српски језик",
        "code": "sr"
    },
    "gd": {
        "name": "Scottish Gaelic; Gaelic",
        "nativeName": "Gàidhlig",
        "code": "gd"
    },
    "sn": {
        "name": "Shona",
        "nativeName": "chiShona",
        "code": "sn"
    },
    "si": {
        "name": "Sinhala, Sinhalese",
        "nativeName": "සිංහල",
        "code": "si"
    },
    "sk": {
        "name": "Slovak",
        "nativeName": "slovenčina",
        "code": "sk"
    },
    "sl": {
        "name": "Slovene",
        "nativeName": "slovenščina",
        "code": "sl"
    },
    "so": {
        "name": "Somali",
        "nativeName": "Soomaaliga, af Soomaali",
        "code": "so"
    },
    "st": {
        "name": "Southern Sotho",
        "nativeName": "Sesotho",
        "code": "st"
    },
    "es": {
        "name": "Spanish; Castilian",
        "nativeName": "español",
        "code": "es"
    },
    "su": {
        "name": "Sundanese",
        "nativeName": "Basa Sunda",
        "code": "su"
    },
    "sw": {
        "name": "Swahili",
        "nativeName": "Kiswahili",
        "code": "sw"
    },
    "ss": {
        "name": "Swati",
        "nativeName": "SiSwati",
        "code": "ss"
    },
    "sv": {
        "name": "Swedish",
        "nativeName": "Svenska",
        "code": "sv"
    },
    "ta": {
        "name": "Tamil",
        "nativeName": "தமிழ்",
        "code": "ta"
    },
    "te": {
        "name": "Telugu",
        "nativeName": "తెలుగు",
        "code": "te"
    },
    "tg": {
        "name": "Tajik",
        "nativeName": "тоҷикӣ, toğikī, تاجیکی‎",
        "code": "tg"
    },
    "th": {
        "name": "Thai",
        "nativeName": "ไทย",
        "code": "th"
    },
    "ti": {
        "name": "Tigrinya",
        "nativeName": "ትግርኛ",
        "code": "ti"
    },
    "bo": {
        "name": "Tibetan Standard, Tibetan, Central",
        "nativeName": "བོད་ཡིག",
        "code": "bo"
    },
    "tk": {
        "name": "Turkmen",
        "nativeName": "Türkmen, Түркмен",
        "code": "tk"
    },
    "tl": {
        "name": "Tagalog",
        "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔",
        "code": "tl"
    },
    "tn": {
        "name": "Tswana",
        "nativeName": "Setswana",
        "code": "tn"
    },
    "to": {
        "name": "Tonga (Tonga Islands)",
        "nativeName": "faka Tonga",
        "code": "to"
    },
    "tr": {
        "name": "Turkish",
        "nativeName": "Türkçe",
        "code": "tr"
    },
    "ts": {
        "name": "Tsonga",
        "nativeName": "Xitsonga",
        "code": "ts"
    },
    "tt": {
        "name": "Tatar",
        "nativeName": "татарча, tatarça, تاتارچا‎",
        "code": "tt"
    },
    "tw": {
        "name": "Twi",
        "nativeName": "Twi",
        "code": "tw"
    },
    "ty": {
        "name": "Tahitian",
        "nativeName": "Reo Tahiti",
        "code": "ty"
    },
    "ug": {
        "name": "Uighur, Uyghur",
        "nativeName": "Uyƣurqə, ئۇيغۇرچە‎",
        "code": "ug"
    },
    "uk": {
        "name": "Ukrainian",
        "nativeName": "українська",
        "code": "uk"
    },
    "ur": {
        "name": "Urdu",
        "nativeName": "اردو",
        "code": "ur"
    },
    "uz": {
        "name": "Uzbek",
        "nativeName": "zbek, Ўзбек, أۇزبېك‎",
        "code": "uz"
    },
    "ve": {
        "name": "Venda",
        "nativeName": "Tshivenḓa",
        "code": "ve"
    },
    "vi": {
        "name": "Vietnamese",
        "nativeName": "Tiếng Việt",
        "code": "vi"
    },
    "vo": {
        "name": "Volapük",
        "nativeName": "Volapük",
        "code": "vo"
    },
    "wa": {
        "name": "Walloon",
        "nativeName": "Walon",
        "code": "wa"
    },
    "cy": {
        "name": "Welsh",
        "nativeName": "Cymraeg",
        "code": "cy"
    },
    "wo": {
        "name": "Wolof",
        "nativeName": "Wollof",
        "code": "wo"
    },
    "fy": {
        "name": "Western Frisian",
        "nativeName": "Frysk",
        "code": "fy"
    },
    "xh": {
        "name": "Xhosa",
        "nativeName": "IsiXhosa",
        "code": "xh"
    },
    "yi": {
        "name": "Yiddish",
        "nativeName": "ייִדיש",
        "code": "yi"
    },
    "yo": {
        "name": "Yoruba",
        "nativeName": "Yorùbá",
        "code": "yo"
    },
    "za": {
        "name": "Zhuang, Chuang",
        "nativeName": "Saɯ cueŋƅ, Saw cuengh",
        "code": "za"
    }
}

export const SupportedLanguages = {
    [LanguageList.en.code] : {
        ...LanguageList.en
    },
    [LanguageList.ur.code] : {
        ...LanguageList.ur
    }
}

export const nF = (scale) => {
    return scale 
}