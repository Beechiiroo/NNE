import { createContext, useContext, useState } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    education: "Formation",
    salary: "Salaire",
    projects: "Projets",
    blog: "Blog",
    contact: "Contact",
    login: "Connexion",
    signup: "Inscription",
    logout: "Déconnexion",
    welcome: "Bienvenue",
    location: "Localisation",
    email: "Email",
    developedBy: "Développé par",
  },
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    education: "Education",
    salary: "Salary",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    welcome: "Welcome",
    location: "Location",
    email: "Email",
    developedBy: "Developed by",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
