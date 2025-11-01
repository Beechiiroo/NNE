import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      title: "Introduction aux Réseaux Neuronaux Convolutifs (CNN)",
      excerpt: "Découvrez comment les CNN révolutionnent la vision par ordinateur et pourquoi ils sont si efficaces pour traiter les images.",
      date: "15 Janvier 2025",
      readTime: "8 min",
      category: "Deep Learning",
      tags: ["CNN", "Computer Vision", "Tutorial"],
    },
    {
      title: "Transformers : L'Architecture qui a Changé le NLP",
      excerpt: "Plongez dans l'architecture Transformer, de l'attention mechanism aux modèles modernes comme GPT et BERT.",
      date: "10 Janvier 2025",
      readTime: "12 min",
      category: "NLP",
      tags: ["Transformers", "NLP", "Architecture"],
    },
    {
      title: "Comment Fine-tuner un Modèle LLM sur vos Données",
      excerpt: "Guide pratique pour adapter un grand modèle de langage à votre domaine spécifique avec PyTorch.",
      date: "5 Janvier 2025",
      readTime: "15 min",
      category: "Tutorial",
      tags: ["LLM", "Fine-tuning", "PyTorch"],
    },
    {
      title: "Optimisation d'Hyperparamètres avec Optuna",
      excerpt: "Techniques avancées pour trouver les meilleurs hyperparamètres de vos modèles de machine learning.",
      date: "28 Décembre 2024",
      readTime: "10 min",
      category: "MLOps",
      tags: ["Optimization", "Hyperparameters", "Tools"],
    },
    {
      title: "GANs : Créer des Images Réalistes avec l'IA",
      excerpt: "Explorez les Generative Adversarial Networks et apprenez à générer des images synthétiques impressionnantes.",
      date: "20 Décembre 2024",
      readTime: "11 min",
      category: "Generative AI",
      tags: ["GANs", "Image Generation", "Advanced"],
    },
    {
      title: "Déployer un Modèle PyTorch en Production avec FastAPI",
      excerpt: "Du développement à la production : créez une API REST performante pour servir vos modèles PyTorch.",
      date: "15 Décembre 2024",
      readTime: "14 min",
      category: "MLOps",
      tags: ["Deployment", "FastAPI", "Production"],
    },
  ];

  const categories = ["Tous", "Deep Learning", "NLP", "Tutorial", "MLOps", "Generative AI"];

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
              <span className="text-gradient">Blog & Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Guides, tutoriels et actualités sur le deep learning et l'intelligence artificielle
            </p>
          </motion.div>
        </section>

        {/* Categories Filter */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </section>

        {/* Articles Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow group cursor-pointer flex flex-col">
                  <div className="mb-4">
                    <Badge className="mb-3">{article.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border">
              <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Recevez les derniers articles, tutoriels et actualités du monde de l'IA 
                directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg">
                  S'abonner
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

export default Blog;
