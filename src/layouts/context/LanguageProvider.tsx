// src/contexts/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import i18n from '../../locales/i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, []);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem('language', lng);
      setCurrentLanguage(lng);
    });
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
