import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import lvTranslation from './locales/lv.json';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
  resources: {
    en: {
      translation: enTranslation
    },
    fr: {
      translation: lvTranslation
    }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false // React already escapes the output
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
          <BrowserRouter>
              <App />
          </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
