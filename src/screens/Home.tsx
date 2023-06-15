import { useState, useEffect } from 'react';
import { LuStep } from '../components/luStep';
import { Page } from './Page';
import { Link } from 'react-router-dom';
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';
import { useTranslation } from 'react-i18next';
import homeImage from "../assets/images/home/roadToLuDf.jpg";

export const Home = () => {
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
      <div className="container mx-auto px-6 mt-24">
        <div className="py-12">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-center">
              <h1 className="cursor-default text-3xl sm:text-4xl font-bold text-gray-800 leading-tight text-center">
                {languageData.greeting}
              </h1>
              <hr className="h-1 bg-df from-sky-400 to-sky-600 my-4 rounded" />
              <p className="cursor-default text-gray-600 text-base sm:text-lg font-medium text-center">
                {languageData.description}
              </p>
              <div className="flex mt-4 justify-center">
                <Link to="/celsLidzIzvelei">
                  <button className="text-white px-4 py-2 rounded bg-unFocused hover:bg-focused transition font-semibold text-base sm:text-lg">
                    {languageData.buttonText}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-center">
              <div className="relative">
                <img src={homeImage} alt="resursi" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-6 mt-8">
          <div className="py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-default">
              <LuStep
                title={languageData.step1Title}
                description={languageData.step1Description}
              />
              <LuStep
                title={languageData.step2Title}
                description={languageData.step2Description}
              />
              <LuStep
                title={languageData.step3Title}
                description={languageData.step3Description}
              />
              <LuStep
                title={languageData.step4Title}
                description={languageData.step4Description}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};