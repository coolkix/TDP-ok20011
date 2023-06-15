import { Page } from "./Page";
import { useState, useEffect } from 'react';
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';
import { useTranslation } from 'react-i18next';

export const MacibuMateriali = () => {

  const { i18n } = useTranslation();
  const [languageData, setLanguageData] = useState(enData); // Default language data is set to English

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    const selectedLanguage = storedLanguage || i18n.language;
    if (selectedLanguage === 'en') {
      setLanguageData(enData);
    } else {
      setLanguageData(lvData);
    }
  }, [i18n.language]);

  useEffect(() => {
    // Force re-render when languageData changes
  }, [languageData]);

  return (
    <Page>
      <div className="min-h-screen">
        {/* About us, bg image */}
        <div className="relative flex bg-center justify-center items-center bg-[url('assets/images/latvijasBiblioteka/resursi.jpg')] h-[80vh] bg-cover bg-no-repeat">
          <div className="absolute top-1/4 transform -translate-y-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center font-montserrat">
              {languageData.macibuMaterialiTitle}
            </h1>
          </div>
        </div>
        <div className="px-4 md:px-12 lg:px-20">
          <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
            {languageData.macibuMaterialiSubTitle1}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center mt-4 mb-12 text-gray-600">
            {languageData.macibuMaterialiSubText1}
          </p>
        </div>
        <div className="px-4 md:px-12 lg:px-20">
          <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
            {languageData.macibuMaterialiSubTitle2}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center mt-4 mb-12 text-gray-600">
            {languageData.macibuMaterialiSubText2}
          </p>
        </div>
        <div className="px-4 md:px-12 lg:px-20">
          <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
            {languageData.macibuMaterialiSubTitle3}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center mt-4 mb-12 text-gray-600">
            {languageData.macibuMaterialiSubText3}
          </p>
        </div>
      </div>
    </Page>
  );
};