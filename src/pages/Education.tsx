import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Education = () => {
  const degrees = [
    {
      level: "Bac +5 / Master",
      programs: [
        "Master en Intelligence Artificielle",
        "Master en Data Science",
        "Master en Informatique (spécialisation IA)",
        "Diplôme d'Ingénieur (École Polytechnique, CentraleSupélec, INSA...)",
      ],
      recommended: true,
    },
    {
      level: "Bac +8 / Doctorat",
      programs: [
        "Doctorat en Machine Learning",
        "PhD en Computer Vision",
        "PhD en Natural Language Processing",
        "Recherche en Neurosciences computationnelles",
      ],
      recommended: false,
    },
  ];

  const certifications = [
    {
      name: "TensorFlow Developer Certificate",
      provider: "Google",
      icon: Award,
      level: "Intermédiaire",
    },
    {
      name: "Deep Learning Specialization",
      provider: "DeepLearning.AI (Coursera)",
      icon: Award,
      level: "Avancé",
    },
    {
      name: "Machine Learning Engineer Nanodegree",
      provider: "Udacity",
      icon: Award,
      level: "Professionnel",
    },
    {
      name: "NVIDIA Deep Learning Institute",
      provider: "NVIDIA",
      icon: Award,
      level: "Expert",
    },
    {
      name: "AWS Certified Machine Learning",
      provider: "Amazon Web Services",
      icon: Award,
      level: "Professionnel",
    },
    {
      name: "Professional Machine Learning Engineer",
      provider: "Google Cloud",
      icon: Award,
      level: "Professionnel",
    },
  ];

  const learningPaths = [
    {
      icon: BookOpen,
      title: "Bases mathématiques",
      description: "Algèbre linéaire, calcul différentiel, probabilités et statistiques",
      duration: "3-6 mois",
    },
    {
      icon: BookOpen,
      title: "Programmation Python",
      description: "Maîtrise de Python, NumPy, Pandas et visualisation de données",
      duration: "2-4 mois",
    },
    {
      icon: BookOpen,
      title: "Machine Learning fondamental",
      description: "Algorithmes classiques, preprocessing, évaluation de modèles",
      duration: "4-6 mois",
    },
    {
      icon: BookOpen,
      title: "Deep Learning",
      description: "Réseaux neuronaux, CNN, RNN, Transformers avec TensorFlow/PyTorch",
      duration: "6-12 mois",
    },
    {
      icon: BookOpen,
      title: "Spécialisation",
      description: "Computer Vision, NLP, ou Reinforcement Learning selon l'intérêt",
      duration: "6-12 mois",
    },
    {
      icon: BookOpen,
      title: "MLOps & Production",
      description: "Déploiement, monitoring, et scalabilité des modèles",
      duration: "3-6 mois",
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
            <GraduationCap className="h-20 w-20 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Parcours Académique</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez les formations et certifications pour devenir Neural Network Engineer
            </p>
          </motion.div>
        </section>

        {/* Academic Degrees */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Diplômes Universitaires</h2>
            <p className="text-lg text-muted-foreground">
              Les parcours académiques recommandés pour ce métier
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {degrees.map((degree, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 h-full ${degree.recommended ? 'bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-primary/50' : 'bg-card/50'} backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{degree.level}</h3>
                    {degree.recommended && (
                      <Badge className="bg-primary">
                        <Star className="h-3 w-3 mr-1" />
                        Recommandé
                      </Badge>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {degree.programs.map((program, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{program}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Certifications Professionnelles</h2>
            <p className="text-lg text-muted-foreground">
              Certifications reconnues pour valider vos compétences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow group">
                  <div className="relative inline-block mb-4">
                    <cert.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/40 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.provider}</p>
                  <Badge variant="outline">{cert.level}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Parcours d'Apprentissage</h2>
            <p className="text-lg text-muted-foreground">
              Étapes recommandées pour devenir Neural Network Engineer
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {learningPaths.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow group">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <Badge variant="outline" className="ml-2">{step.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
