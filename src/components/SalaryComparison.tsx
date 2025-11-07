import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SalaryComparison = () => {
  const comparisonData = [
    {
      level: "Junior (0-2)",
      France: 52,
      USA: 100,
      UK: 60,
    },
    {
      level: "Confirmé (3-5)",
      France: 72,
      USA: 150,
      UK: 85,
    },
    {
      level: "Senior (5-10)",
      France: 102,
      USA: 215,
      UK: 120,
    },
    {
      level: "Expert (10+)",
      France: 150,
      USA: 375,
      UK: 170,
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card/95 backdrop-blur-sm p-4 rounded-lg border border-border shadow-lg">
          <p className="font-semibold mb-2">{payload[0].payload.level} ans</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}k {entry.name === "USA" ? "$" : entry.name === "France" ? "€" : "£"}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-8">
        <BarChart3 className="h-8 w-8 text-secondary" />
        <h3 className="text-3xl font-bold">Comparaison Internationale</h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-[400px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={comparisonData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="level" 
              stroke="hsl(var(--muted-foreground))" 
              style={{ fontSize: '0.875rem' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              style={{ fontSize: '0.875rem' }}
              label={{ value: 'Salaire (k)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            <Bar 
              dataKey="France" 
              fill="hsl(262 83% 58%)" 
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            />
            <Bar 
              dataKey="USA" 
              fill="hsl(217 91% 60%)" 
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
              animationBegin={200}
            />
            <Bar 
              dataKey="UK" 
              fill="hsl(187 85% 53%)" 
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
              animationBegin={400}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">🇫🇷</span>
            <span className="font-semibold">France</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Marché mature, salaires compétitifs en Europe, fiscalité élevée
          </p>
        </div>

        <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">🇺🇸</span>
            <span className="font-semibold">États-Unis</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Salaires les plus élevés, concentration Big Tech, stock-options importantes
          </p>
        </div>

        <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">🇬🇧</span>
            <span className="font-semibold">Royaume-Uni</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Londres hub européen de l'IA, salaires intermédiaires, coût de vie élevé
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SalaryComparison;