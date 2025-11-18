import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  color: string;
  size: "sm" | "md" | "lg";
}

const skills: Skill[] = [
  { name: "Python", color: "neon-blue", size: "lg" },
  { name: "TensorFlow", color: "neon-orange", size: "md" },
  { name: "PyTorch", color: "neon-pink", size: "lg" },
  { name: "Keras", color: "neon-purple", size: "sm" },
  { name: "Deep Learning", color: "neon-cyan", size: "lg" },
  { name: "NLP", color: "neon-green", size: "md" },
  { name: "Computer Vision", color: "neon-blue", size: "md" },
  { name: "MLOps", color: "neon-pink", size: "sm" },
  { name: "AWS", color: "neon-orange", size: "md" },
  { name: "Docker", color: "neon-cyan", size: "sm" },
  { name: "Kubernetes", color: "neon-purple", size: "sm" },
  { name: "React", color: "neon-blue", size: "md" },
];

const getSizeClass = (size: string) => {
  switch (size) {
    case "lg": return "text-lg px-6 py-3";
    case "md": return "text-base px-4 py-2";
    case "sm": return "text-sm px-3 py-1.5";
    default: return "text-base px-4 py-2";
  }
};

export const SkillsOrbit = () => {
  return (
    <Card className="p-12 bg-gradient-to-br from-card via-primary/5 to-secondary/5 border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-dashed border-primary/30 rounded-full animate-rotate" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-dashed border-secondary/30 rounded-full animate-rotate" style={{ animationDirection: "reverse" }} />
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-3 justify-center items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.05,
              duration: 0.4,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
          >
            <Badge 
              className={`${getSizeClass(skill.size)} bg-${skill.color}/20 text-${skill.color} border-${skill.color}/50 hover:bg-${skill.color}/30 transition-all cursor-pointer shadow-lg hover:shadow-xl`}
              style={{
                backgroundColor: `hsl(var(--${skill.color}) / 0.2)`,
                borderColor: `hsl(var(--${skill.color}) / 0.5)`,
                color: `hsl(var(--${skill.color}))`,
              }}
            >
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
