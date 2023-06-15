import { Page } from "./Page";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';
import { useTranslation } from 'react-i18next';

export const CelsLidzIzvelei = () => {

    const handleClick = () => {
        window.scrollTo(0, 0);
      };

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
      <div className="min-h-screen cursor-default">
        {/* About us, bg image */}
        <div className="relative flex bg-center justify-center items-center bg-[url('assets/images/celsLidzIzvelei/decision.jpg')] md:h-about h-screen bg-cover bg-no-repeat">
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl text-black font-bold text-center font-montserrat">
            {languageData.izveleTitle}
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
        <div className="px-4 md:px-12 lg:px-20 w-4/5 text-center">
          <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
            {languageData.izveleSubTitle1}
          </h1>
          <p className="justify-center text-base md:text-lg lg:text-xl mt-4 mb-12 text-gray-600">
            {languageData.izveleSubText1}
          </p>
        </div>
        <div className="px-4 md:px-12 lg:px-20 w-4/5 text-center">
          <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
          {languageData.izveleSubTitle2}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-4 mb-12 text-gray-600">
            {languageData.izveleSubText2}
            </p>
            </div>
        <div className="px-4 md:px-12 lg:px-20 w-4/5 text-center">
          <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
          {languageData.izveleSubTitle3}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-4 mb-12 text-gray-600">
            {languageData.izveleSubText3}
          </p>
        </div>
        </div>
        <div className="text-center text-3xl mb-12 ">
          <Link to="/celsUzLu" onClick={handleClick}>
            <button className="text-white px-4 py-2 rounded bg-unFocused hover:bg-focused transition font-semibold text-base sm:text-lg" >
              {languageData.izveleButton}
            </button>
          </Link>
        </div>
      </div>
    </Page>
  );
};