import { motion } from "framer-motion";
import { Brain, Code, Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const missions = [
    {
      icon: Brain,
      title: "Conception de réseaux neuronaux",
      description: "Développer et entraîner des architectures deep learning performantes adaptées aux besoins spécifiques",
    },
    {
      icon: Code,
      title: "Optimisation des modèles",
      description: "Améliorer la précision, la vitesse et l'efficacité des algorithmes d'apprentissage",
    },
    {
      icon: Rocket,
      title: "Déploiement à grande échelle",
      description: "Mettre en production des modèles IA capables de traiter des millions de requêtes",
    },
    {
      icon: Lightbulb,
      title: "Recherche & Développement",
      description: "Explorer de nouvelles architectures inspirées du cerveau humain et des neurosciences",
    },
  ];

  const importance = [
    {
      icon: Target,
      title: "Moteur de l'IA moderne",
      description: "Les réseaux neuronaux sont au cœur de toutes les avancées en IA : reconnaissance d'image, NLP, véhicules autonomes...",
    },
    {
      icon: TrendingUp,
      title: "Croissance exponentielle",
      description: "La demande pour ce profil explose avec +300% de croissance ces 5 dernières années",
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Le métier de</span><br />
              <span className="text-gradient">Neural Network Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un Neural Network Engineer est un expert spécialisé dans la conception, 
              l'entraînement et l'optimisation de réseaux neuronaux artificiels. 
              Ce professionnel combine expertise en intelligence artificielle, 
              mathématiques avancées et ingénierie logicielle pour créer des 
              systèmes capables d'apprendre et de résoudre des problèmes complexes.
            </p>
          </motion.div>
        </section>

        {/* Missions Section */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Missions principales</h2>
            <p className="text-lg text-muted-foreground">
              Les responsabilités clés d'un Neural Network Engineer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow group">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <mission.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/40 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                      <p className="text-muted-foreground">{mission.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Importance Section */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Pourquoi ce métier est-il important ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Le Neural Network Engineer joue un rôle crucial dans la révolution 
              technologique actuelle. Voici pourquoi ce métier est essentiel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {importance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-card via-card to-primary/5 border-border hover:border-primary/50 transition-all duration-300 card-glow">
                  <div className="relative inline-block mb-6">
                    <item.icon className="h-16 w-16 text-primary" />
                    <div className="absolute inset-0 blur-2xl bg-primary/30" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Future Section */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border">
              <h2 className="text-3xl font-bold mb-6 text-center">
                L'avenir du métier
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Avec l'expansion continue de l'IA dans tous les secteurs (santé, finance, 
                  transport, éducation...), le métier de Neural Network Engineer est promis 
                  à un bel avenir.
                </p>
                <p>
                  Les innovations dans les architectures neuronales (Transformers, GANs, 
                  Diffusion Models) ouvrent constamment de nouvelles perspectives. Les 
                  ingénieurs qui maîtrisent ces technologies sont au cœur de la transformation 
                  digitale mondiale.
                </p>
                <p className="font-semibold text-foreground">
                  Le Neural Network Engineer n'est pas seulement un développeur : 
                  c'est un architecte de l'intelligence artificielle, un chercheur 
                  appliqué et un innovateur qui façonne le futur.
                </p>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
