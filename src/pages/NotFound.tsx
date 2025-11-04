import { motion } from "framer-motion";
import { Brain, Home, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Brain className="h-32 w-32 text-primary mx-auto" />
              </motion.div>
              <motion.div
                className="absolute inset-0 blur-3xl bg-primary/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* 404 Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold mb-4">
              <span className="text-gradient neon-glow">404</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Page introuvable
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Il semblerait que cette page n'existe pas dans notre réseau neuronal. 
              Peut-être s'est-elle perdue dans les couches profondes de l'IA ?
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button size="lg" className="group">
                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Retour à l'accueil
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="group">
                <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explorer le site
              </Button>
            </Link>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50"
          >
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Fun fact:</span> Les réseaux neuronaux 
              peuvent avoir des millions de connexions, mais même eux n'ont pas trouvé cette page ! 🧠
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
