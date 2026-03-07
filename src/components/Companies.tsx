import { motion } from "motion/react";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const companies = [
  {
    name: "Hewlett Packard Enterprise",
    role: "Project Management & Automation",
    period: "2023 - Present",
    location: "Geneva, Switzerland",
    logo: "HPE",
    description: "Leading Private 5G innovation and coordinating international cross-functional teams. Developed automation tools for reporting.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "United Nations",
    role: "Information Management Consultant",
    period: "2022 - 2023",
    location: "Geneva, Switzerland",
    logo: "UN",
    description: "Managed global databases and analyzed complex needs assessments for international missions.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    name: "ExxonMobil",
    role: "Data Analyst Intern",
    period: "2020 - 2021",
    location: "Prishtina, Kosovo",
    logo: "EM",
    description: "Supported data-driven decision making through rigorous analysis and visualization of operational metrics.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export default function Companies() {
  return (
    <section id="companies" className="py-24 px-6 max-w-7xl mx-auto bg-transparent relative z-10">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white"
        >
          Trusted by <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">Industry Leaders.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-10 rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-500/5 dark:shadow-indigo-500/10 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-indigo-500/20 transition-all flex flex-col items-center justify-center text-center"
          >
            <div className={`w-24 h-24 rounded-2xl ${company.bgColor} flex items-center justify-center text-3xl font-black ${company.color} shadow-inner mb-6 group-hover:scale-110 transition-transform`}>
              {company.logo}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors">{company.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}