import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative group"
    >
      <Globe className="h-5 w-5" />
      <span className="absolute -top-1 -right-1 text-[10px] font-bold text-primary">
        {language.toUpperCase()}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
