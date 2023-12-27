import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import en from './translations/en.json'
import ur from './translations/ur.json'

const translations = {
    en,
    ur
};
const i18n = new I18n(translations);

// i18n.locale = 'ur';

// // Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;

// // When a value is missing from a language it'll fall back to another language with the key present.
// i18n.enableFallback = true;
// // To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
// // i18n.locale = 'ja';

const _T = (key) => {
    return i18n.t(key)
}

const rtlLocaleMap = {
    'ae': true, // Avestan
    'ar': true, // Arabic
    'arc': true, // Aramaic
    'bcc': true, // Southern Balochi
    'bqi': true, // Bakthiari
    'ckb': true, // Sorani
    'dv': true, // Dhivehi
    'fa': true, 'far': true, // Persian
    'glk': true, // Gilaki
    'he': true, 'iw': true, // Hebrew
    'khw': true, // Khowar
    'ks': true, // Kashmiri
    'ku': true, // Kurdish
    'mzn': true, // Mazanderani
    'nqo': true, // N'Ko
    'pnb': true, // Western Punjabi
    'ps': true, // Pashto
    'sd': true, // Sindhi
    'ug': true, // Uyghur
    'ur': true, // Urdu
    'yi': true // Yiddish
};
  
const isLocaleRTL = locale => Boolean(rtlLocaleMap[locale]);

export {
    _T,
    i18n,
    isLocaleRTL
}