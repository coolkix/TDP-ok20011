import { Page } from "./Page";
import { AboutSection } from "../components/AboutSection";
import resursiImage from "../assets/images/celsUzLuDf/resursi.png";
import programminzenierijaImage from "../assets/images/kursi/programminzenierija.png";
import documentImage from "../assets/images/kursi/document.png";
import prakseImage from "../assets/images/kursi/prakse.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';
import { useTranslation } from 'react-i18next';

export const KursiNoder = () => {

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
      <div>
        {/* About us, bg image */}
        <div className="relative flex bg-center justify-center items-center bg-[url('assets/images/kursi/kubiks.jpg')] md:h-about h-screen bg-cover bg-no-repeat">
          <h1 className="top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-bold text-center font-montserrat absolute">
            {languageData.kursiNoderTitle}
          </h1>
        </div>
        {/* Photos, info */}
        <div className="container mx-auto mt-16 ">
          <div>
            <AboutSection
              title={languageData.kursiNoderBoxTitle1}
              separator={true}
              contentFirst={true}
              content={languageData.kursiNoderBoxText1}
              icon={<img src={programminzenierijaImage} alt="kurss 1" className="w-full h-auto rounded-3xl" />}
            />

            <AboutSection
              title={languageData.kursiNoderBoxTitle2}
              separator={true}
              content={languageData.kursiNoderBoxText2}
              icon={<img src={documentImage} alt="kurss 2" className="w-full h-auto rounded-3xl" />}
            />

            <AboutSection
              title={languageData.kursiNoderBoxTitle3}
              contentFirst={true}
              content={languageData.kursiNoderBoxText3}
              icon={<img src={prakseImage} alt="kurss 3" className="w-full h-auto rounded-3xl" />}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center mb-16 mt-7 px-6">
            <div className="md:w-80 md:h-80 w-56 h-56">
              <img src={resursiImage} alt="resursi" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link to="/macibuMateriali" onClick={handleClick}>
                <button className="text-white text-4xl px-4 py-2 rounded bg-unFocused hover:bg-focused transition font-semibold text-base  mt-4">
                {languageData.kursiNoderButtonTitle}
                </button>
              </Link>
              <div className="text-base text-3xl text-center mx-auto mt-4 mb-4 sm:pl-5 pl-6">
                {languageData.kursiNoderMaterialiText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};