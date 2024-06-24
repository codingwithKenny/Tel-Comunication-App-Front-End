import React from 'react';
import { useTranslation } from 'react-i18next';

function SelectLanguage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        {/* <option value="de">Deutsch</option>
        <option value="it">Italiano</option>
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
        <option value="ru">Русский</option>
        <option value="pt">Português</option>
        <option value="ar">العربية</option> */}
        {/* Add more options for other languages */}
      </select>
    </div>
  );
}

export default SelectLanguage;