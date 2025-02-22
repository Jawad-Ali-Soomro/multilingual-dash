import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// this file is  intentionally created to change dashboards language accordingly

const resources = {
    en: {
        translation: {
            "sidebar": {
                "dashboard": "Dashboard",
                "users": "Users",
                "properties": "Properties",
                "village_form_I": "Village Form I",
                "village_form_II": "Village Form II",
                "village_form_VIIA": "Village Form VIIA",
                "village_form_VIIB": "Village Form VIIB",
                "city_survey_form": "City Survey Form",
                "ghat_wadh_form": "Ghat Wadh Form",
                "properties_list": "Properties List",
                "logout": "Logout"
            },
            "topbar": { "dashboard": "Dashboard" },
            "dropdown": { "profile": "Profile", "settings": "Settings", "logout": "Logout" }
        }
    },
    sd: {
        translation: {
            "sidebar": {
                "dashboard": "ڊيش بورڊ",
                "users": "استعمال ڪندڙ",
                "properties": "ملڪيتون",
                "village_form_I": "ڳوٺ فارم I",
                "village_form_II": "ڳوٺ فارم II",
                "village_form_VIIA": "ڳوٺ فارم VIIA",
                "village_form_VIIB": "ڳوٺ فارم VIIB",
                "city_survey_form": "شهر سروي فارم",
                "ghat_wadh_form": "گھاٽ واڌ فارم",
                "properties_list": "ملڪيتن جي فهرست",
                "logout": "باہر نڪرو"
            },
            "topbar": { "dashboard": "ڊيش بورڊ" },
            "dropdown": { "profile": "پروفائل", "settings": "سيٽنگون", "logout": "باہر نڪرو" }
        }
    },
    ur: {
        translation: {
            "sidebar": {
                "dashboard": "ڈیش بورڈ",
                "users": "صارفین",
                "properties": "جائیدادیں",
                "village_form_I": "گاؤں فارم I",
                "village_form_II": "گاؤں فارم II",
                "village_form_VIIA": "گاؤں فارم VIIA",
                "village_form_VIIB": "گاؤں فارم VIIB",
                "city_survey_form": "شہری سروے فارم",
                "ghat_wadh_form": "گھاٹ واڈ فارم",
                "properties_list": "جائیدادوں کی فہرست",
                "logout": "لاگ آؤٹ"
            },
            "topbar": { "dashboard": "ڈیش بورڈ" },
            "dropdown": { "profile": "پروفائل", "settings": "ترتیبات", "logout": "لاگ آؤٹ" }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;