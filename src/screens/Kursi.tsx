import { Page } from './Page';
import thinkingImage from "../assets/images/kursi/thinking.png";
import paperAirplaneImage from "../assets/images/kursi/paperAirplane.png";
import usefulImage from "../assets/images/kursi/useful.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';
import { useTranslation } from 'react-i18next';

interface BoxProps {
  icon: string;
  description: string;
  buttonTitle: string;
  path: string; // Path for the button to navigate
}

function Box({ icon, description, buttonTitle, path }: BoxProps) {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-df p-6 rounded-lg shadow-md h-full">
      <div className="mb-4 flex justify-center">
        {icon === thinkingImage ? (
          <img className="w-14 h-14 filter brightness-0 invert" src={icon} alt="Icon" />
        ) : icon === usefulImage ? (
          <img className="-mt-6 -mb-4 w-24 h-24 filter brightness-0 invert" src={icon} alt="Icon" />
        ) : (
          <img className="w-14 h-14" src={icon} alt="Icon" />
        )}
      </div>
      <div className="flex-grow mb-4 text-center">
        <p className="text-white">{description}</p>
      </div>
      <div className="flex justify-center">
        <Link
          to={path} // Navigate to the specified path
          className="px-4 py-2 bg-unFocused hover:bg-focused rounded-xl px-4 py-2 transition duration-200 text-white rounded-lg"
          onClick={handleClick}
        >
          {buttonTitle}
        </Link>
      </div>
    </div>
  );
}

export const Kursi = () => {

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
      <div className="cursor-default relative flex bg-center justify-center  bg-[url('assets/images/kursi/kods.jpg')] md:h-about h-screen bg-cover bg-no-repeat">
        <div className="absolute top-1/4">
          <h1 className="text-4xl text-white font-bold text-center font-montserrat">
            {languageData.macibuPieredzeTitle}
          </h1>
        </div>
      </div>
      <div className="cursor-default px-4 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
          {languageData.macibuPieredzeSubTitle}
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-4 mb-12 text-gray-600">
          {languageData.macibuPieredzeSubText}
        </p>
      </div>
      <div className="container mx-auto px-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Box
              icon={thinkingImage}
              description= {languageData.macibuPieredzeBoxText1}
              buttonTitle= {languageData.macibuPieredzeBoxButton1}
              path="/kursiGrutakie"
            />
          </div>
          <div className="flex flex-col">
            <Box
              icon={paperAirplaneImage}
              description= {languageData.macibuPieredzeBoxText2}
              buttonTitle= {languageData.macibuPieredzeBoxButton2}
              path="/kursiInteresanti"
            />
          </div>
          <div className="flex flex-col">
            <Box
              icon={usefulImage}
              description= {languageData.macibuPieredzeBoxText3}
              buttonTitle= {languageData.macibuPieredzeBoxButton3}
              path="/kursiNoderigakie"
            />
          </div>
        </div>
      </div>
    </Page>
  );
};