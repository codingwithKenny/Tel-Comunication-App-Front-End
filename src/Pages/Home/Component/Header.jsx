import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SelectLanguage from './SelectLanguage';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showBars, setShowBars] = useState(false);
  const { t } = useTranslation();

  function handleToggleBars() {
    setShowBars(!showBars);
  }

  return (
    <div className='container'>
      <div onClick={handleToggleBars}>
        {!showBars ? (
          <i id='menuicon' className="fa-solid fa-bars"></i>
        ) : (
          <i id='xicon' className="fa-solid fa-xmark"></i>
        )}
        {showBars && <MobileNav t={t} />}
      </div>
      <div className='logo'>
        <Link to="/"><img src="/logo.png" className='logo' alt="" /></Link>
      </div>
      <div className='bars'>
        <Link to="/">{t('Home')}</Link>
        <Link to="/about">{t('About')}</Link>
        <Link to="/feature">{t('Feature')}</Link>
        <Link to="/service">{t('Service')}</Link>
        <Link to="/contact">{t('Contact Us')}</Link>
      </div>
      <div className='regButton'>
        <button><Link to="/auth">Login</Link></button>
        <button><Link to="/auth/signup">{t("Register")}</Link></button>
      </div>
      <div>
        <SelectLanguage />
      </div>
    </div>
  );
};

export default Header;

function MobileNav({ t }) {
  return (
    <ul className='navitemmobile'>
      <li><Link to="/" className='bar'>{t('Home')}</Link></li>
      <li><Link to="/about" className='bar'>{t('About')}</Link></li>
      <li><Link to="/feature" className='bar'>{t('Feature')}</Link></li>
      <li><Link to="/service" className='bar'>{t('Service')}</Link></li>
      <li><Link to="/contact" className='bar'>{t('Contact Us')}</Link></li>
    </ul>
  );
}