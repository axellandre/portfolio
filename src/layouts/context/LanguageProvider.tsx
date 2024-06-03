import { createContext, useState, useEffect, ReactNode } from 'react';
import i18n from '../../locales/i18n';

interface LanguageContextProps {
  currentLanguage: string;
  changeLanguage: (lng: string) => void;
}

const defaultValue: LanguageContextProps = {
  currentLanguage: 'fr',
  changeLanguage: () => {}
};

export const LanguageContext = createContext<LanguageContextProps>(defaultValue);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

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
