import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import en from './translations/en.json'
import ur from './translations/ur.json'

const translations = {
    en,
    ur
};
const i18n = new I18n(translations);

i18n.locale = 'en';
// i18n.locale = 'en';

// // Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;

// // When a value is missing from a language it'll fall back to another language with the key present.
// i18n.enableFallback = true;
// // To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
// // i18n.locale = 'ja';

const _T = (key) => {
    return i18n.t(key)
}

export {
    _T
}