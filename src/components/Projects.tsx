import { motion } from "motion/react";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Private 5G Automation",
    category: "AI & Automation",
    description: "Developed a Python-based suite for HPE to automate complex reporting tasks, reducing manual processing time by 30%.",
    image: "https://picsum.photos/seed/5g/800/600",
    link: "#",
    tags: ["Python", "Automation", "HPE"],
  },
  {
    title: "Global Data Insights",
    category: "Data Analytics",
    description: "Architected data visualization dashboards for international needs assessments, improving decision-making speed for regional directors.",
    image: "https://picsum.photos/seed/data/800/600",
    link: "#",
    tags: ["SQL", "Tableau", "UN"],
  },
  {
    title: "Agile Transformation",
    category: "Project Management",
    description: "Led the transition of a cross-functional team to Scrum, resulting in a 20% increase in sprint velocity and improved team morale.",
    image: "https://picsum.photos/seed/agile/800/600",
    link: "#",
    tags: ["Scrum", "Agile", "Leadership"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white"
            >
              Featured <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">Projects.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-xl"
            >
              A selection of impactful initiatives where I've applied my expertise in project management and data-driven innovation.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="#" className="group flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">
              View All Projects <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-500/5 dark:shadow-indigo-500/10 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-indigo-500/20 transition-all relative"
            >
              {/* Gradient Border for Dark Mode */}
              <div className="absolute inset-0 rounded-[32px] border-2 border-transparent bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-indigo-600/20 opacity-0 dark:group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-bold rounded-full text-blue-600 dark:text-indigo-400 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors"
                >
                  Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}