import { motion } from "motion/react";
import { BookOpen, ExternalLink, Sparkles } from "lucide-react";

export default function Author() {
  return (
    <section id="author" className="py-24 px-6 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-indigo-400 bg-blue-50 dark:bg-indigo-900/30 rounded-full">
            <Sparkles className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
            SOMNUS: <br />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">A Journey of the Mind.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            My debut novel explores the profound depths of the human mind. It follows Angélie, who vividly envisions a boy named Somna. The narrative invites readers on a psychological journey, blurring the lines between what is truly happening and what is entirely the brilliant fruit of her imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20"
            >
              English Edition
              <ExternalLink className="w-4 h-4 opacity-50" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-900 dark:text-white rounded-2xl font-bold shadow-lg border border-slate-100 dark:border-slate-700"
            >
              Édition Française
              <ExternalLink className="w-4 h-4 opacity-50" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 relative"
        >
          <div className="relative z-10 aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30 group">
            <img 
              src="https://picsum.photos/seed/book/800/1000" 
              alt="SOMNUS Book Cover" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white font-bold text-xl">Explore the depths of imagination.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}