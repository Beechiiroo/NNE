import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Smartphone, CheckCircle, Chrome, Apple } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      toast({
        title: "Installation non disponible",
        description: "L'installation automatique n'est pas disponible sur votre navigateur.",
        variant: "destructive",
      });
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
      toast({
        title: "Installation réussie!",
        description: "L'application a été installée sur votre appareil.",
      });
      setTimeout(() => navigate("/"), 2000);
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Installer l'Application PWA
            </h1>
            <p className="text-xl text-muted-foreground">
              Accédez instantanément à la plateforme Neural Network Engineer depuis votre écran d'accueil
            </p>
          </div>

          {isInstalled ? (
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Application déjà installée
                </CardTitle>
                <CardDescription>
                  L'application est déjà installée sur votre appareil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate("/")} className="w-full">
                  Retour à l'accueil
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-6 w-6" />
                  Installation rapide
                </CardTitle>
                <CardDescription>
                  Installez l'application en un clic pour une expérience optimale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isInstallable ? (
                  <Button 
                    onClick={handleInstallClick} 
                    size="lg" 
                    className="w-full"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Installer maintenant
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      L'installation automatique n'est pas disponible. Suivez ces étapes pour installer manuellement :
                    </p>
                    
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Chrome className="h-5 w-5" />
                            Sur Chrome / Edge (Android)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                            <li>Appuyez sur le menu (⋮) en haut à droite</li>
                            <li>Sélectionnez "Ajouter à l'écran d'accueil"</li>
                            <li>Confirmez l'installation</li>
                          </ol>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Apple className="h-5 w-5" />
                            Sur Safari (iOS)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                            <li>Appuyez sur le bouton de partage (⎋)</li>
                            <li>Faites défiler et sélectionnez "Sur l'écran d'accueil"</li>
                            <li>Appuyez sur "Ajouter"</li>
                          </ol>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Accès rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lancez l'application directement depuis votre écran d'accueil
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Mode hors ligne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Consultez le contenu même sans connexion internet
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expérience native</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Interface fluide similaire à une application native
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Install;
