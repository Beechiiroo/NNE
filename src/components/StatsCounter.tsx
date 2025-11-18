import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code, Users, Award, Zap } from "lucide-react";

interface Stat {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const stats: Stat[] = [
  { icon: Code, value: 50, label: "Projets Complétés", suffix: "+", color: "neon-blue" },
  { icon: Users, value: 100, label: "Clients Satisfaits", suffix: "+", color: "neon-purple" },
  { icon: Award, value: 15, label: "Prix & Certifications", suffix: "+", color: "neon-pink" },
  { icon: Zap, value: 99, label: "Précision Modèles", suffix: "%", color: "neon-green" },
];

export const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} isInView={isInView} index={index} />
      ))}
    </div>
  );
};

const StatCard = ({ stat, isInView, index }: { stat: Stat; isInView: boolean; index: number }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card className={`p-6 text-center hover-lift gradient-border bg-gradient-to-br from-card to-${stat.color}/5 relative overflow-hidden group`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300" />
        <div className="relative z-10">
          <Icon className={`h-8 w-8 mx-auto mb-3 text-${stat.color}`} />
          <motion.div
            className="text-4xl font-bold mb-2"
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            <span className="text-gradient">{count}</span>
            <span className={`text-${stat.color}`}>{stat.suffix}</span>
          </motion.div>
          <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
        </div>
      </Card>
    </motion.div>
  );
};
