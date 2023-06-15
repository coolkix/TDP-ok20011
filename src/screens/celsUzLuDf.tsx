import { useState, useEffect } from "react";
import { Page } from "./Page";
import latvijasBibliotekaImage from "../assets/images/celsUzLuDf/LatB.jpg";
import agenskalnaTirgusImage from "../assets/images/celsUzLuDf/agenskalnaTirgus.jpg";
import botaniskaisDarzsImage from "../assets/images/celsUzLuDf/luBotD.jpg";
import daugavaImage from "../assets/images/celsUzLuDf/daugava.jpg";
import arkadijasParksImage from "../assets/images/celsUzLuDf/arkadijasParks.jpg";
import pupesParksImage from "../assets/images/celsUzLuDf/pupesParks.jpg";
import zinatnuMajaImage from "../assets/images/celsUzLuDf/zinatnuMaja.jpg";
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const CelsUzLu = () => {
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

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  const contentData1 = [
    {
      image: arkadijasParksImage,
      title: languageData.celsUzLuDfTrainTitle1,
      description: languageData.celsUzLuDfTrainText1,
    },
    {
      image: pupesParksImage,
      title: languageData.celsUzLuDfTrainTitle2,
      description: languageData.celsUzLuDfTrainText2,
    },
    {
      image: zinatnuMajaImage,
      title: languageData.celsUzLuDfTrainTitle3,
      description: languageData.celsUzLuDfTrainText3,
    },
  ];

  const contentData2 = [
    {
      image: latvijasBibliotekaImage,
      title: languageData.celsUzLuDfBusTitle1,
      description: languageData.celsUzLuDfBusText1,
    },
    {
      image: agenskalnaTirgusImage,
      title: languageData.celsUzLuDfBusTitle2,
      description: languageData.celsUzLuDfBusText2,
    },
    {
      image: botaniskaisDarzsImage,
      title: languageData.celsUzLuDfBusTitle3,
      description: languageData.celsUzLuDfBusText3,
    },
  ];

  return (
    <Page>
      <div className="min-h-screen cursor-default">
        {/* Previous background image */}
        <div
          className="relative flex bg-center justify-center items-center bg-[url('assets/images/celsUzLuDf/daugava.jpg')] md:h-about h-screen bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${daugavaImage})` }}
        >
          <div className="absolute -mt-6 ml-4 top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl text-white font-bold text-center font-montserrat">
              {languageData.celsUzLuDfTitle}
            </h1>
          </div>
        </div>

        <div className="px-4 md:px-12 lg:px-20">
          <h1 className="text-3xl md:text-4xl mt-12 text-center text-gray-800 font-semibold">
            {languageData.celsUzLuDfSubTitle}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mt-4 mb-12 text-gray-600">
            {languageData.celsUzLuDfSubText1}
          </p>
        </div>

        <div className="text-center text-3xl mb-12">
          <button
            className={`text-white px-4 py-2 rounded bg-unFocused hover:bg-focused transition font-semibold text-base sm:text-lg mr-2 ${
              activeButton === 1 ? "bg-focused" : ""
            }`}
            onClick={() => handleButtonClick(1)}
            disabled={activeButton === 1}
          >
            {languageData.celsUzLuDfTrain}
          </button>
          <button
            className={`text-white px-4 py-2 rounded bg-unFocused hover:bg-focused transition font-semibold text-base sm:text-lg ${
              activeButton === 2 ? "bg-focused" : ""
            }`}
            onClick={() => handleButtonClick(2)}
            disabled={activeButton === 2}
          >
            {languageData.celsUzLuDfBus}
          </button>
        </div>

        {activeButton === 1 && (
          <div className="px-4 md:px-12 lg:px-20 mb-8">
            {/* Render content 2 when activeButton is 2 */}
            {contentData1.map((content, index) => (
              <div className="flex flex-col md:flex-row mt-8" key={index}>
                <div className="md:w-5/12">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 pl-0 md:pl-8">
                  <h2 className="text-3xl font-semibold">{content.title}</h2>
                  <p className="lg:text-2xl md:text-xl text-base text-gray-600 mt-2">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeButton === 2 && (
          <div className="px-4 md:px-12 lg:px-20 mb-8">
            {/* Render content 2 when activeButton is 2 */}
            {contentData2.map((content, index) => (
              <div className="flex flex-col md:flex-row mt-8" key={index}>
                <div className="md:w-5/12">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 pl-0 md:pl-8">
                  <h2 className="text-3xl font-semibold">{content.title}</h2>
                  <p className="lg:text-2xl md:text-xl text-base text-gray-600 mt-2">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8 mb-8">
          <Link to="/kursi" onClick={handleClick}>
            <button className="text-white px-4 py-2 rounded bg-unFocused hover:bg-focused transition font-semibold text-base sm:text-lg mx-4 sm:mx-0">
              {languageData.celsUzLuDfButton}
            </button>
          </Link>
        </div>
      </div>
    </Page>
  );
};

