import { motion } from "motion/react";
import { Briefcase, Database, Globe, Zap, ShieldCheck, Code, Cpu, Users } from "lucide-react";

const expertise = [
  {
    title: "Project Management",
    description: "Leading Private 5G innovation and coordinating international cross-functional teams with a focus on Agile delivery.",
    icon: <Zap className="w-8 h-8 text-blue-600 dark:text-indigo-400" />,
    skills: ["Agile", "Scrum", "Stakeholder Management"],
    className: "md:col-span-2 md:row-span-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-blue-100 dark:border-indigo-900/50 shadow-xl shadow-blue-500/5 dark:shadow-indigo-500/10",
  },
  {
    title: "Data Analytics",
    description: "Expertise in information management, overseeing global databases and analyzing complex needs assessments.",
    icon: <Database className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
    skills: ["SQL", "Data Visualization", "Information Management"],
    className: "md:col-span-1 md:row-span-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 dark:shadow-violet-500/10",
  },
  {
    title: "AI & Automation",
    description: "Developing Python-based automation tools to streamline reporting and enhance operational efficiency.",
    icon: <Cpu className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    skills: ["Python", "AI Integration", "Process Automation"],
    className: "md:col-span-1 md:row-span-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 dark:shadow-blue-500/10",
  },
  {
    title: "Strategic Leadership",
    description: "Driving innovation through cross-functional leadership and ensuring flawless operational compliance.",
    icon: <Users className="w-8 h-8 text-slate-900 dark:text-slate-100" />,
    skills: ["Cross-functional Teams", "Compliance", "Strategy"],
    className: "md:col-span-2 md:row-span-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-500/5 dark:shadow-indigo-500/10",
  },
];

export default function SkillsExpertise() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto bg-transparent relative z-10">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white"
        >
          Skills & <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">Expertise.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-xl"
        >
          A blend of technical proficiency and strategic leadership, refined through years of experience in global organizations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`p-8 rounded-3xl flex flex-col justify-between transition-all group relative overflow-hidden ${item.className}`}
          >
            {/* Subtle Glow for Dark Mode */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-white dark:bg-slate-700 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-pale-lavender">{item.title}</h3>
              <p className="text-espresso/70 dark:text-pale-lavender/60 leading-relaxed mb-8">
                {item.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {item.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-espresso/5 dark:bg-slate-700 text-espresso/60 dark:text-pale-lavender/50 text-xs font-semibold rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}