import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import lvData from '../locales/lv.json';
import enData from '../locales/en.json';

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const [languageData, setLanguageData] = useState(lvData);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    const currentLanguage = storedLanguage || i18n.language;
    setCurrentLanguage(currentLanguage);
    if (currentLanguage === 'en') {
      setLanguageData(enData);
    } else {
      setLanguageData(lvData);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (language: string) => {
    if (currentLanguage !== language) {
      i18n.changeLanguage(language).then(() => {
        setCurrentLanguage(language);
        if (language === 'en') {
          setLanguageData(enData);
        } else {
          setLanguageData(lvData);
        }
        localStorage.setItem('language', language); // Save language selection in local storage
      });
    }
  };

  return (
    <nav className="w-full p-4 shadow bg-df">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="block lg:hidden mr-4 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <ul
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } lg:flex justify-center items-center gap-x-4`}
          >
            <li className="hover:bg-focused rounded-xl px-4 py-2 transition duration-200 font-medium text-base">
              <NavLink title={languageData.navbar1} href="/" />
            </li>
            <li className="hover:bg-focused rounded-xl px-4 py-2 transition duration-200 font-medium text-base">
              <NavLink title={languageData.navbar2} href="/celsLidzIzvelei" />
            </li>
            <li className="hover:bg-focused rounded-xl px-4 py-2 transition duration-200 font-medium text-base">
              <NavLink title={languageData.navbar3} href="/celsUzLu" />
            </li>
            <li className="hover:bg-focused rounded-xl px-4 py-2 transition duration-200 font-medium text-base">
              <NavLink title={languageData.navbar4} href="/kursi" />
            </li>
            <li className="hover:bg-focused rounded-xl px-4 py-2 transition duration-200 font-medium text-base">
              <NavLink title={languageData.navbar5} href="/macibuMateriali" />
            </li>
          </ul>
        </div>
        <LanguageSelector
          currentLanguage={currentLanguage} // Pass currentLanguage instead of i18n.language
          onLanguageChange={handleLanguageChange}
        />
      </div>
    </nav>
  );
};