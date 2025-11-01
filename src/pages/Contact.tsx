import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <MessageSquare className="h-20 w-20 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Contactez-nous</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une question sur le métier de Neural Network Engineer ? N'hésitez pas à nous écrire !
            </p>
          </motion.div>
        </section>

        {/* Contact Form & Info */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  contact@neuralnetworkengineer.com
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <MessageSquare className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Réseaux Sociaux</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Twitter: @NNEngineers</p>
                  <p>LinkedIn: Neural Network Engineers</p>
                  <p>GitHub: NNE-Community</p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <div className="text-muted-foreground text-sm">
                  <p className="mb-2">
                    <strong className="text-foreground">Horaires de réponse :</strong>
                  </p>
                  <p>Lundi - Vendredi : 9h - 18h</p>
                  <p>Temps de réponse moyen : 24-48h</p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom complet <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Question sur le métier"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Envoyer le message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border">
              <h2 className="text-3xl font-bold mb-6 text-center">Questions Fréquentes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Quel est le meilleur parcours pour devenir Neural Network Engineer ?
                  </h3>
                  <p className="text-muted-foreground">
                    Un Master en IA ou Data Science est recommandé, complété par des projets personnels 
                    et des certifications en deep learning.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Combien de temps faut-il pour maîtriser le deep learning ?
                  </h3>
                  <p className="text-muted-foreground">
                    Avec un bon background en mathématiques et programmation, comptez 1-2 ans de pratique 
                    intensive pour atteindre un niveau professionnel.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Peut-on travailler en remote dans ce métier ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui ! La majorité des postes de Neural Network Engineer permettent le télétravail, 
                    avec parfois quelques jours en présentiel.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
