import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const projectCategories = [
    {
      category: "Computer Vision",
      projects: [
        {
          title: "Système de Détection d'Objets en Temps Réel",
          description: "Implémentation d'un modèle YOLOv8 pour la détection d'objets dans des flux vidéo en direct",
          tags: ["PyTorch", "OpenCV", "YOLO", "Python"],
          github: "#",
        },
        {
          title: "Classification d'Images Médicales",
          description: "CNN profond pour détecter des anomalies sur des radiographies pulmonaires",
          tags: ["TensorFlow", "Keras", "CNN", "Medical AI"],
          github: "#",
        },
      ],
    },
    {
      category: "Natural Language Processing",
      projects: [
        {
          title: "Chatbot Intelligent avec GPT",
          description: "Fine-tuning d'un modèle GPT pour un assistant conversationnel spécialisé",
          tags: ["Transformers", "Hugging Face", "Python", "API"],
          github: "#",
        },
        {
          title: "Analyse de Sentiment Multi-langues",
          description: "Modèle BERT pour classifier les sentiments dans plusieurs langues",
          tags: ["BERT", "NLP", "Multi-lingual", "PyTorch"],
          github: "#",
        },
      ],
    },
    {
      category: "Reinforcement Learning",
      projects: [
        {
          title: "Agent de Jeu Autonome",
          description: "Deep Q-Network (DQN) pour maîtriser des jeux Atari classiques",
          tags: ["DQN", "OpenAI Gym", "RL", "TensorFlow"],
          github: "#",
        },
        {
          title: "Optimisation Robotique",
          description: "Algorithme PPO pour la navigation autonome d'un robot mobile",
          tags: ["PPO", "Robotics", "Simulation", "Python"],
          github: "#",
        },
      ],
    },
    {
      category: "Generative AI",
      projects: [
        {
          title: "Générateur d'Images par Diffusion",
          description: "Implémentation d'un Stable Diffusion model pour la génération d'images",
          tags: ["Diffusion Models", "PyTorch", "CLIP", "AI Art"],
          github: "#",
        },
        {
          title: "Style Transfer Artistique",
          description: "Réseau neuronal pour transférer le style d'une œuvre d'art sur des photos",
          tags: ["Neural Style Transfer", "CNN", "TensorFlow"],
          github: "#",
        },
      ],
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
            <Folder className="h-20 w-20 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Portfolio de Projets</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Exemples de projets typiques d'un Neural Network Engineer
            </p>
          </motion.div>
        </section>

        {/* Projects by Category */}
        {projectCategories.map((category, catIndex) => (
          <section key={catIndex} className="container mx-auto px-4 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">{category.category}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.projects.map((project, projIndex) => (
                <motion.div
                  key={projIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: projIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold pr-4">{project.title}</h3>
                      <div className="flex space-x-2 flex-shrink-0">
                        <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border">
              <h2 className="text-3xl font-bold mb-4">Créez Votre Portfolio</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Un portfolio solide est essentiel pour décrocher un poste de Neural Network Engineer. 
                Commencez par des projets personnels, contribuez à l'open-source, et participez à des compétitions Kaggle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Découvrir GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer">
                    Rejoindre Kaggle
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
