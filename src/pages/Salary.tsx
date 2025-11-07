import { motion } from "framer-motion";
import { DollarSign, TrendingUp, MapPin, Briefcase, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalaryCalculator from "@/components/SalaryCalculator";
import SalaryComparison from "@/components/SalaryComparison";
import CityComparator from "@/components/CityComparator";

const Salary = () => {
  const salaryRanges = [
    {
      level: "Junior (0-2 ans)",
      france: "45k - 60k €",
      usa: "$80k - $120k",
      description: "Premier poste après le diplôme, apprentissage actif",
    },
    {
      level: "Confirmé (3-5 ans)",
      france: "60k - 85k €",
      usa: "$120k - $180k",
      description: "Autonomie sur les projets, expertise technique solide",
    },
    {
      level: "Senior (5-10 ans)",
      france: "85k - 120k €",
      usa: "$180k - $250k",
      description: "Leadership technique, architecture de solutions",
    },
    {
      level: "Expert / Lead (10+ ans)",
      france: "120k - 180k+ €",
      usa: "$250k - $500k+",
      description: "Direction d'équipe, stratégie IA, R&D avancée",
    },
  ];

  const topCompanies = [
    { name: "Google DeepMind", avg: "$300k - $600k" },
    { name: "OpenAI", avg: "$250k - $500k" },
    { name: "Meta AI", avg: "$280k - $550k" },
    { name: "Tesla AI", avg: "$200k - $400k" },
    { name: "Amazon AWS", avg: "$180k - $350k" },
    { name: "Microsoft Research", avg: "$200k - $400k" },
  ];

  const locations = [
    { city: "San Francisco / Bay Area", salary: "$250k+", demand: "Très haute" },
    { city: "New York", salary: "$200k+", demand: "Haute" },
    { city: "Paris", salary: "80k - 120k €", demand: "Haute" },
    { city: "Londres", salary: "£80k - £140k", demand: "Haute" },
    { city: "Berlin", salary: "70k - 110k €", demand: "Moyenne" },
    { city: "Toronto", salary: "CAD 120k - 200k", demand: "Haute" },
  ];

  const benefits = [
    "Stock-options / Actions de l'entreprise",
    "Bonus annuels (15-30% du salaire)",
    "Budget formation et conférences",
    "Matériel haut de gamme (GPU workstations)",
    "Télétravail flexible",
    "Assurance santé premium",
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
            <div className="relative inline-block mb-6">
              <DollarSign className="h-20 w-20 text-primary mx-auto animate-float relative z-10" />
              <Sparkles className="h-8 w-8 text-secondary absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Calculateur de Salaire IA</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez votre potentiel salarial avec notre outil interactif personnalisé
            </p>
          </motion.div>
        </section>

        {/* Interactive Calculator */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SalaryCalculator />
          </motion.div>
        </section>

        {/* Comparison Chart */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SalaryComparison />
          </motion.div>
        </section>

        {/* City Comparator */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Comparateur de Villes</h2>
            <p className="text-lg text-muted-foreground">
              Comparez jusqu'à 3 villes pour trouver votre destination idéale
            </p>
          </motion.div>
          <CityComparator />
        </section>

        {/* Salary Ranges */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Grille Salariale</h2>
            <p className="text-lg text-muted-foreground">
              Fourchettes de salaire selon l'expérience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {salaryRanges.map((range, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-card via-card to-primary/5 border-border hover:border-primary/50 transition-all duration-300 card-glow">
                  <div className="flex items-center space-x-3 mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">{range.level}</h3>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">France:</span>
                      <span className="text-lg font-semibold text-primary">{range.france}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">USA:</span>
                      <span className="text-lg font-semibold text-secondary">{range.usa}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{range.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Companies */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Top Employeurs</h2>
            <p className="text-lg text-muted-foreground">
              Les entreprises qui paient le mieux (USA)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow group cursor-pointer">
                  <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
                  <p className="text-2xl font-bold text-gradient">{company.avg}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Locations */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Salaires par Région</h2>
            <p className="text-lg text-muted-foreground">
              Les meilleures villes pour ce métier
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-glow">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{location.city}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Salaire moyen:</span>
                      <span className="font-semibold text-primary">{location.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Demande:</span>
                      <span className="font-semibold">{location.demand}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Market Trends */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">Tendances du Marché</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground">+300% de croissance</strong> en 5 ans : 
                  la demande pour les Neural Network Engineers a explosé avec l'essor du deep learning.
                </p>
                <p>
                  <strong className="text-foreground">Pénurie de talents :</strong> Moins de 
                  candidats qualifiés que d'offres d'emploi, créant une forte pression salariale à la hausse.
                </p>
                <p>
                  <strong className="text-foreground">Télétravail généralisé :</strong> La majorité 
                  des postes permettent le travail à distance, ouvrant l'accès à des salaires internationaux.
                </p>
                <p>
                  <strong className="text-foreground">Évolution rapide :</strong> Un junior peut 
                  atteindre un niveau senior en 5-7 ans avec de bonnes compétences et de la motivation.
                </p>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Avantages Additionnels</h2>
            <p className="text-lg text-muted-foreground">
              Au-delà du salaire de base
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center">
                  <p className="font-medium">{benefit}</p>
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

export default Salary;
