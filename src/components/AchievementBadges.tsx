import { motion } from "framer-motion";
import { Trophy, Star, Zap, Target, Award, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  { icon: Crown, title: "Expert IA", description: "5+ ans d'expérience", color: "neon-orange" },
  { icon: Trophy, title: "Top Performer", description: "99% de précision", color: "neon-green" },
  { icon: Star, title: "Innovation Leader", description: "15+ brevets", color: "neon-purple" },
  { icon: Zap, title: "Fast Learner", description: "Maîtrise rapide", color: "neon-cyan" },
  { icon: Target, title: "Goal Crusher", description: "50+ projets", color: "neon-pink" },
  { icon: Award, title: "Certified Pro", description: "15+ certifications", color: "neon-blue" },
];

export const AchievementBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 150
            }}
            whileHover={{ 
              scale: 1.1,
              rotateZ: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
          >
            <Card className={`p-4 text-center hover-lift gradient-border bg-gradient-to-br from-card to-${achievement.color}/10 relative overflow-hidden group cursor-pointer`}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="relative z-10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-${achievement.color}/20 flex items-center justify-center border-2 border-${achievement.color}/50`}
                  style={{
                    backgroundColor: `hsl(var(--${achievement.color}) / 0.2)`,
                    borderColor: `hsl(var(--${achievement.color}) / 0.5)`,
                  }}
                >
                  <Icon 
                    className="h-8 w-8"
                    style={{ color: `hsl(var(--${achievement.color}))` }}
                  />
                </div>
                <h3 className="font-bold text-sm mb-1">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
                <Badge 
                  variant="outline" 
                  className="mt-2 text-xs"
                  style={{ borderColor: `hsl(var(--${achievement.color}) / 0.5)` }}
                >
                  Débloqué ✓
                </Badge>
              </motion.div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};
