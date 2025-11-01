import { Brain, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold text-gradient">NNE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plateforme dédiée au métier de Neural Network Engineer
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Sfax, Tunisia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:BechirChaieb999@gmail.com" className="hover:text-primary transition-colors">
                  BechirChaieb999@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Compétences</Link></li>
              <li><Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">Formation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/salary" className="text-muted-foreground hover:text-primary transition-colors">Salaire</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projets</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Beechiiroo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground space-y-2">
          <p>&copy; {new Date().getFullYear()} Neural Network Engineer Platform. Tous droits réservés.</p>
          <p>
            {t("developedBy")}{" "}
            <a 
              href="https://github.com/Beechiiroo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Beechir Chaieb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
