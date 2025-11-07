import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, TrendingUp, Home, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface City {
  id: string;
  name: string;
  country: string;
  flag: string;
  salary: string;
  salaryNum: number;
  costOfLiving: number; // 1-10
  jobOpenings: number;
  qualityOfLife: number; // 1-10
  techScene: number; // 1-10
  currency: string;
}

const cities: City[] = [
  {
    id: "sf",
    name: "San Francisco",
    country: "USA",
    flag: "🇺🇸",
    salary: "$250k+",
    salaryNum: 250000,
    costOfLiving: 10,
    jobOpenings: 5000,
    qualityOfLife: 7,
    techScene: 10,
    currency: "$"
  },
  {
    id: "nyc",
    name: "New York",
    country: "USA",
    flag: "🇺🇸",
    salary: "$200k+",
    salaryNum: 200000,
    costOfLiving: 9,
    jobOpenings: 3500,
    qualityOfLife: 8,
    techScene: 9,
    currency: "$"
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    flag: "🇫🇷",
    salary: "80k-120k €",
    salaryNum: 100000,
    costOfLiving: 8,
    jobOpenings: 1200,
    qualityOfLife: 8,
    techScene: 7,
    currency: "€"
  },
  {
    id: "london",
    name: "Londres",
    country: "UK",
    flag: "🇬🇧",
    salary: "£80k-£140k",
    salaryNum: 110000,
    costOfLiving: 9,
    jobOpenings: 2000,
    qualityOfLife: 7,
    techScene: 8,
    currency: "£"
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Allemagne",
    flag: "🇩🇪",
    salary: "70k-110k €",
    salaryNum: 90000,
    costOfLiving: 6,
    jobOpenings: 800,
    qualityOfLife: 9,
    techScene: 7,
    currency: "€"
  },
  {
    id: "toronto",
    name: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    salary: "CAD 120k-200k",
    salaryNum: 150000,
    costOfLiving: 7,
    jobOpenings: 1500,
    qualityOfLife: 9,
    techScene: 7,
    currency: "CAD"
  },
];

const CityComparator = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>(["sf", "paris"]);

  const toggleCity = (cityId: string) => {
    setSelectedCities(prev => {
      if (prev.includes(cityId)) {
        return prev.filter(id => id !== cityId);
      } else if (prev.length < 3) {
        return [...prev, cityId];
      }
      return prev;
    });
  };

  const selected = cities.filter(city => selectedCities.includes(city.id));

  const renderBar = (value: number, max: number = 10, color: string = "primary") => (
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`h-full bg-${color} rounded-full`}
        style={{ backgroundColor: `hsl(var(--${color}))` }}
      />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* City Selector */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-4">
          Sélectionner jusqu'à 3 villes à comparer
        </h3>
        <div className="flex flex-wrap gap-3">
          {cities.map(city => (
            <Button
              key={city.id}
              variant={selectedCities.includes(city.id) ? "default" : "outline"}
              onClick={() => toggleCity(city.id)}
              className="relative"
            >
              <span className="mr-2">{city.flag}</span>
              {city.name}
              {selectedCities.includes(city.id) && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  ✓
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </Card>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selected.map((city, index) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="p-6 bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{city.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{city.name}</h3>
                    <p className="text-sm text-muted-foreground">{city.country}</p>
                  </div>
                </div>
              </div>

              {/* Salary */}
              <div className="mb-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Salaire moyen</span>
                </div>
                <p className="text-3xl font-bold text-primary">{city.salary}</p>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Home className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Coût de la vie</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{city.costOfLiving}/10</span>
                  </div>
                  {renderBar(city.costOfLiving, 10, "destructive")}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Offres d'emploi</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{city.jobOpenings}+</span>
                  </div>
                  {renderBar(city.jobOpenings, 5000, "secondary")}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Qualité de vie</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{city.qualityOfLife}/10</span>
                  </div>
                  {renderBar(city.qualityOfLife, 10, "accent")}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">💻</span>
                      <span className="text-sm font-medium">Écosystème Tech</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{city.techScene}/10</span>
                  </div>
                  {renderBar(city.techScene, 10, "primary")}
                </div>
              </div>

              {/* Score Card */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Score global</span>
                  <Badge variant="secondary" className="text-lg">
                    {Math.round((city.qualityOfLife + city.techScene - city.costOfLiving/2) * 10) / 10} / 10
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {selected.length === 0 && (
        <Card className="p-12 text-center bg-muted/30">
          <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Sélectionnez au moins une ville pour commencer la comparaison
          </p>
        </Card>
      )}
    </div>
  );
};

export default CityComparator;