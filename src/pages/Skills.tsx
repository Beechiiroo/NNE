import { motion } from "framer-motion";
import { Brain, Code2, Database, GitBranch, Cloud, BookOpen, Cpu, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Intelligence Artificielle & Machine Learning",
      skills: [
        "Réseaux neuronaux profonds (DNN, CNN, RNN, LSTM)",
        "Architectures Transformer (GPT, BERT, Vision Transformers)",
        "GANs et modèles génératifs",
        "Reinforcement Learning",
        "Transfer Learning & Fine-tuning",
        "Optimisation d'hyperparamètres",
      ],
      level: "expert",
    },
    {
      icon: Code2,
      title: "Frameworks & Langages",
      skills: [
        "Python (NumPy, Pandas, Scikit-learn)",
        "TensorFlow / Keras",
        "PyTorch",
        "JAX",
        "C++ pour optimisation",
        "CUDA pour GPU programming",
      ],
      level: "expert",
    },
    {
      icon: Database,
      title: "Mathématiques & Statistiques",
      skills: [
        "Algèbre linéaire",
        "Calcul différentiel et optimisation",
        "Probabilités et statistiques",
        "Théorie de l'information",
        "Neurosciences computationnelles",
      ],
      level: "advanced",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        "AWS SageMaker / Google Cloud AI",
        "MLOps et pipelines CI/CD",
        "Docker & Kubernetes",
        "Monitoring de modèles en production",
        "Optimisation des coûts cloud",
      ],
      level: "intermediate",
    },
    {
      icon: GitBranch,
      title: "Gestion de Projet & Collaboration",
      skills: [
        "Git et versioning de modèles",
        "Documentation technique",
        "Méthodologies Agile/Scrum",
        "Communication interdisciplinaire",
        "Revue de code et pair programming",
      ],
      level: "intermediate",
    },
    {
      icon: BookOpen,
      title: "Veille Technologique",
      skills: [
        "Lecture d'articles scientifiques (arXiv)",
        "Participation à des conférences (NeurIPS, ICML)",
        "Contribution open-source",
        "Expérimentation de nouvelles architectures",
      ],
      level: "ongoing",
    },
  ];

  const softSkills = [
    { name: "Pensée analytique", icon: Brain },
    { name: "Résolution de problèmes complexes", icon: Cpu },
    { name: "Créativité", icon: TrendingUp },
    { name: "Travail en équipe", icon: GitBranch },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-primary";
      case "advanced":
        return "bg-secondary";
      case "intermediate":
        return "bg-accent";
      default:
        return "bg-muted";
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "expert":
        return "Expert";
      case "advanced":
        return "Avancé";
      case "intermediate":
        return "Intermédiaire";
      default:
        return "En cours";
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Compétences Requises</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Le Neural Network Engineer doit maîtriser un large éventail de compétences 
              techniques et soft skills pour exceller dans ce domaine exigeant.
            </p>
          </motion.div>
        </section>

        {/* Technical Skills */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Compétences Techniques</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <category.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/40 transition-all" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <Badge className={getLevelColor(category.level)}>
                      {getLevelLabel(category.level)}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Soft Skills Essentielles</h2>
            <p className="text-lg text-muted-foreground">
              Au-delà des compétences techniques, certaines qualités humaines sont indispensables
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-card via-card to-primary/5 border-border hover:border-primary/50 transition-all duration-300 card-glow group cursor-pointer">
                  <div className="relative inline-block mb-4">
                    <skill.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform mx-auto" />
                    <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/40 transition-all" />
                  </div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advice Section */}
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
                Comment développer ces compétences ?
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground">1. Formation académique solide :</strong> Un diplôme 
                  en informatique, mathématiques ou IA est fortement recommandé.
                </p>
                <p>
                  <strong className="text-foreground">2. Pratique continue :</strong> Participez à des 
                  compétitions Kaggle, contribuez à l'open-source, et créez vos propres projets.
                </p>
                <p>
                  <strong className="text-foreground">3. Veille technologique :</strong> Lisez régulièrement 
                  des papers, suivez les conférences et restez à jour sur les dernières avancées.
                </p>
                <p>
                  <strong className="text-foreground">4. Networking :</strong> Rejoignez des communautés, 
                  participez à des meetups et échangez avec d'autres professionnels du domaine.
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

export default Skills;
