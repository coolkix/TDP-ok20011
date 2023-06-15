import { useState } from 'react';
import latviaFlagImage from "../assets/images/latvijasBiblioteka/latviaFlag.png";
import englishFlagImage from "../assets/images/latvijasBiblioteka/englishFlag.png";
import lvData from "../locales/lv.json";
import enData from "../locales/en.json";
import { NavLink } from './NavLink';

type LanguageSelectorProps = {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const handleLanguageChange = (language: string) => {
    if (language !== currentLanguage) {
      onLanguageChange(language);
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center">
      <button
        className={`w-10 h-10 mr-2 ${currentLanguage === 'lv' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleLanguageChange('lv')}
      >
        {/* Latvian flag icon 
        <img src={latviaFlagImage} alt="Latvian" />*/}
        <h1 className="text-white font-bold">LV</h1>
      </button>
      <button
        className={`w-10 h-10 ${currentLanguage === 'en' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleLanguageChange('en')}
      >
        {/* English flag icon 
        <img src={englishFlagImage} alt="English" />*/}
        <h1 className="text-white font-bold">EN</h1>
      </button>
    </div>
  );
};