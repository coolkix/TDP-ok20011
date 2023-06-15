import { Route, Routes } from "react-router-dom"
import './App.css';
import { Home } from './screens/Home';
import { Kursi } from "./screens/Kursi";
import { CelsLidzIzvelei } from "./screens/celsLidzIzvelei";
import { CelsUzLu } from "./screens/celsUzLuDf";
import { KursiGrut } from "./screens/kursiGrut";
import { KursiInteresanti } from "./screens/kursiInteresanti";
import { KursiNoder } from "./screens/kursiNoder";
import { MacibuMateriali } from "./screens/macibuMateriali";
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';
import { useState } from "react";

function App() {

    const [currentLanguage, setCurrentLanguage] = useState('lv');

    const handleLanguageChange = (language: string) => {
        setCurrentLanguage(language);
      };

    return (
        <I18nextProvider i18n={i18n}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/celsLidzIzvelei" element={<CelsLidzIzvelei />} />
            <Route path="/celsUzLu" element={<CelsUzLu />} />
            <Route path="/Kursi" element={<Kursi />} />
            <Route path="/kursiGrutakie" element={<KursiGrut />} />
            <Route path="/KursiInteresanti" element={<KursiInteresanti />} />
            <Route path="/kursiNoderigakie" element={<KursiNoder />} />
            <Route path="/macibuMateriali" element={<MacibuMateriali />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </I18nextProvider>
  );
}
export default App;
