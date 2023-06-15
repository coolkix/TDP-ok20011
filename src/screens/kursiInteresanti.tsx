import { Page } from "./Page";
import { AboutSection } from "../components/AboutSection";
import resursiImage from "../assets/images/celsUzLuDf/resursi.png";
import windowsImage from "../assets/images/kursi/windows.png";
import prakseImage from "../assets/images/kursi/prakse.png";
import uznemejdarbibaImage from "../assets/images/kursi/uznemejdarbiba.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';
import { useTranslation } from 'react-i18next';

export const KursiInteresanti = () => {

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
        <div className="relative flex bg-center justify-center items-center bg-[url('assets/images/kursi/interesanti.jpg')] md:h-about h-screen bg-cover bg-no-repeat">
          <h1 className="top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl text-white font-bold text-center font-montserrat absolute">
            {languageData.kursiInterTitle}
          </h1>
        </div>
        {/* Photos, info */}
        <div className="container mx-auto mt-16">
          <div>
            <AboutSection
              title={languageData.kursiInterBoxTitle1}
              separator={true}
              contentFirst={true}
              content={languageData.kursiInterBoxText1}
              icon={<img src={windowsImage} alt="kurss 1" className="w-full h-auto rounded-3xl" />}
            />

            <AboutSection
              title={languageData.kursiInterBoxTitle2}
              separator={true}
              content={languageData.kursiInterBoxText2}
              icon={<img src={prakseImage} alt="kurss 2" className="w-full h-auto rounded-3xl" />}
            />

            <AboutSection
              title={languageData.kursiInterBoxTitle3}
              contentFirst={true}
              content={languageData.kursiInterBoxText3}
              icon={<img src={uznemejdarbibaImage} alt="kurss 3" className="w-full h-auto rounded-3xl" />}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center mb-16 mt-7 px-6">
            <div className="md:w-80 md:h-80 w-56 h-56">
              <img src={resursiImage} alt="resursi" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <Link to="/macibuMateriali" onClick={handleClick}>
                    <button className="text-white text-4xl px-4 py-2 rounded bg-unFocused hover:bg-focused transition font-semibold text-base  mt-4">
                    {languageData.kursiInterButtonTitle}
                    </button>
                </Link>
                    <div className="text-base text-3xl text-center mx-auto mt-4 mb-4 sm:pl-5 pl-6">
                       {languageData.kursiInterMaterialiText}
                </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};