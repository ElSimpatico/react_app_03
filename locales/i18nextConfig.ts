import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { common_en } from './en';
import { common_es } from './es';

i18next.use(initReactI18next).init({
    interpolation: {
        escapeValue: false
    },
    lng: 'es',
    resources: {
        es: {
            common: common_es
        },
        en: {
            common: common_en
        }
    }
});

export default i18next;
