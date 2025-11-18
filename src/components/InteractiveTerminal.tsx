import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const commands = [
  { cmd: "whoami", output: "Neural Network Engineer" },
  { cmd: "skills --list", output: "AI • Deep Learning • Python • TensorFlow • PyTorch" },
  { cmd: "status", output: "Available for exciting projects ✨" },
  { cmd: "experience", output: "5+ years in AI/ML engineering" },
];

export const InteractiveTerminal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      const currentCmd = commands[currentIndex];
      const fullText = `$ ${currentCmd.cmd}\n${currentCmd.output}`;
      
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setDisplayText("");
          setCurrentIndex((prev) => (prev + 1) % commands.length);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-6 font-mono text-sm overflow-hidden relative hover-lift">
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="h-5 w-5 text-neon-green" />
        <span className="text-foreground font-semibold">terminal.sh</span>
        <div className="flex gap-1.5 ml-auto">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-neon-orange" />
          <div className="w-3 h-3 rounded-full bg-neon-green" />
        </div>
      </div>
      
      <div className="min-h-[100px] relative">
        <AnimatePresence mode="wait">
          <motion.pre
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-foreground whitespace-pre-wrap"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-neon-green ml-1"
            />
          </motion.pre>
        </AnimatePresence>
      </div>
    </Card>
  );
};
