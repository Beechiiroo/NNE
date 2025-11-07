import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface CalculatorResult {
  baseMin: number;
  baseMax: number;
  withBonusMin: number;
  withBonusMax: number;
}

const SalaryCalculator = () => {
  const [experience, setExperience] = useState([3]);
  const [location, setLocation] = useState("france");
  const [companyType, setCompanyType] = useState("startup");
  const [skills, setSkills] = useState<string[]>(["pytorch", "tensorflow"]);

  const skillsList = [
    "pytorch", "tensorflow", "keras", "cuda", "transformers", 
    "opencv", "nlp", "computer-vision", "reinforcement-learning", "mlops"
  ];

  const toggleSkill = (skill: string) => {
    setSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const calculateSalary = (): CalculatorResult => {
    const exp = experience[0];
    let baseMin = 0;
    let baseMax = 0;

    // Base selon expérience et localisation
    if (location === "france") {
      if (exp <= 2) { baseMin = 45000; baseMax = 60000; }
      else if (exp <= 5) { baseMin = 60000; baseMax = 85000; }
      else if (exp <= 10) { baseMin = 85000; baseMax = 120000; }
      else { baseMin = 120000; baseMax = 180000; }
    } else if (location === "usa") {
      if (exp <= 2) { baseMin = 80000; baseMax = 120000; }
      else if (exp <= 5) { baseMin = 120000; baseMax = 180000; }
      else if (exp <= 10) { baseMin = 180000; baseMax = 250000; }
      else { baseMin = 250000; baseMax = 500000; }
    } else if (location === "uk") {
      if (exp <= 2) { baseMin = 50000; baseMax = 70000; }
      else if (exp <= 5) { baseMin = 70000; baseMax = 100000; }
      else if (exp <= 10) { baseMin = 100000; baseMax = 140000; }
      else { baseMin = 140000; baseMax = 200000; }
    }

    // Ajustement par type d'entreprise
    const companyMultiplier = {
      startup: 0.85,
      scaleup: 1.0,
      bigtech: 1.4,
      research: 1.2,
    }[companyType];

    baseMin *= companyMultiplier;
    baseMax *= companyMultiplier;

    // Bonus pour compétences (5% par compétence additionnelle)
    const skillBonus = 1 + (skills.length * 0.05);
    baseMin *= skillBonus;
    baseMax *= skillBonus;

    // Avec bonus annuels (20% en moyenne)
    const withBonusMin = baseMin * 1.2;
    const withBonusMax = baseMax * 1.2;

    return {
      baseMin: Math.round(baseMin),
      baseMax: Math.round(baseMax),
      withBonusMin: Math.round(withBonusMin),
      withBonusMax: Math.round(withBonusMax),
    };
  };

  const result = calculateSalary();
  const currency = location === "france" ? "€" : location === "usa" ? "$" : "£";

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-2 border-primary/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse-glow opacity-50" />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-8">
          <Calculator className="h-8 w-8 text-primary" />
          <h3 className="text-3xl font-bold">Calculateur de Salaire Personnalisé</h3>
        </div>

        <div className="space-y-8">
          {/* Experience Slider */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-lg font-semibold">Années d'expérience</label>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                {experience[0]} ans
              </Badge>
            </div>
            <Slider
              value={experience}
              onValueChange={setExperience}
              max={15}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>Junior</span>
              <span>Confirmé</span>
              <span>Senior</span>
              <span>Expert</span>
            </div>
          </div>

          {/* Location Select */}
          <div>
            <label className="text-lg font-semibold mb-3 block">Localisation</label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Sélectionner une région" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="france">🇫🇷 France</SelectItem>
                <SelectItem value="usa">🇺🇸 États-Unis</SelectItem>
                <SelectItem value="uk">🇬🇧 Royaume-Uni</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Company Type */}
          <div>
            <label className="text-lg font-semibold mb-3 block">Type d'entreprise</label>
            <Select value={companyType} onValueChange={setCompanyType}>
              <SelectTrigger className="w-full bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="startup">🚀 Startup (-15%)</SelectItem>
                <SelectItem value="scaleup">📈 Scale-up (Base)</SelectItem>
                <SelectItem value="bigtech">🏢 Big Tech (+40%)</SelectItem>
                <SelectItem value="research">🔬 Recherche (+20%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Skills */}
          <div>
            <label className="text-lg font-semibold mb-3 block">
              Compétences spécialisées <span className="text-sm text-muted-foreground">(+5% par skill)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {skillsList.map(skill => (
                <Badge
                  key={skill}
                  variant={skills.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer hover:scale-105 transition-transform px-3 py-1"
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <motion.div
            key={`${result.baseMin}-${result.baseMax}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border-2 border-primary/30"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <h4 className="text-2xl font-bold">Estimation de Salaire</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">Salaire de base annuel :</span>
                <span className="text-3xl font-bold text-gradient">
                  {formatNumber(result.baseMin)} - {formatNumber(result.baseMax)} {currency}
                </span>
              </div>
              
              <div className="h-px bg-border" />
              
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">Avec bonus (20%) :</span>
                <span className="text-3xl font-bold text-primary">
                  {formatNumber(result.withBonusMin)} - {formatNumber(result.withBonusMax)} {currency}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                💡 Cette estimation inclut : {skills.length} compétences spécialisées, 
                un multiplicateur de {companyType === "bigtech" ? "+40%" : companyType === "research" ? "+20%" : companyType === "startup" ? "-15%" : "base"} 
                pour le type d'entreprise, et des bonus annuels moyens de 20%.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};

export default SalaryCalculator;