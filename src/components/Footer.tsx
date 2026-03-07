import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-100/20 dark:border-slate-800/50 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            © 2026 Lorik Gagica. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Designed with precision & innovation.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium"
        >
          Made with <Heart className="w-4 h-4 text-blue-600 fill-blue-600" /> in 2026
        </motion.div>
      </div>
    </footer>
  );
}