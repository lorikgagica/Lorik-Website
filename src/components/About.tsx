import { motion } from "motion/react";
import { GraduationCap, MapPin, Languages, Heart, Camera, Coffee, Plane, Globe } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Information Systems",
    school: "Lund University, Sweden",
    period: "2021 - 2023",
    description: "Focused on strategic information management and digital transformation.",
  },
  {
    degree: "Bachelor in Business & IT",
    school: "University of Prishtina",
    period: "2017 - 2020",
    description: "Foundation in business processes and software development.",
  },
];

const languages = [
  { name: "English", level: "Native / Bilingual", proficiency: 100 },
  { name: "Albanian", level: "Native", proficiency: 100 },
  { name: "German", level: "Professional Working", proficiency: 80 },
  { name: "Swedish", level: "Elementary", proficiency: 30 },
];

const photos = [
  { url: "https://picsum.photos/seed/travel1/600/800", caption: "Exploring the Alps" },
  { url: "https://picsum.photos/seed/travel2/600/600", caption: "Stockholm Cityscape" },
  { url: "https://picsum.photos/seed/travel3/800/600", caption: "Prishtina Nights" },
  { url: "https://picsum.photos/seed/travel4/600/800", caption: "Mediterranean Summer" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto bg-transparent relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-indigo-400 bg-blue-50 dark:bg-indigo-900/30 rounded-full">
              <Globe className="w-4 h-4" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white">
              A Global Perspective <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent italic">on Innovation.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I'm Lorik, a professional dedicated to bridging the gap between complex technology and strategic business objectives. With a background in Information Systems and experience in global organizations, I thrive on solving intricate problems through innovation.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Beyond the office, I'm an avid traveler and photographer, always seeking new perspectives and cultures. My journey has taken me from the tech hubs of Sweden to international missions with the UN.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 dark:bg-indigo-900/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-100 dark:border-indigo-900/50">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-indigo-500 border-4 border-white dark:border-[#020617]" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.degree}</h4>
                  <p className="text-blue-600 dark:text-indigo-400 font-semibold text-sm mb-1">{item.school} • {item.period}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-violet-50 dark:bg-violet-900/30 rounded-lg">
                <Languages className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Languages</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-900 dark:text-white">{lang.name}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">{lang.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-violet-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visuals */}
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg ${
                index === 0 ? "aspect-[3/4] row-span-2" : "aspect-square"
              }`}
            >
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-xs font-medium">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
          <div className="col-span-2 p-8 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-3xl border border-white/20 dark:border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <h4 className="font-bold dark:text-pale-lavender">Capturing Moments</h4>
            </div>
            <p className="text-sm text-espresso/70 dark:text-pale-lavender/60 italic leading-relaxed">
              "Photography is the only language that can be understood anywhere in the world."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}