import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white">
                Let's Work <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">Together.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:lorik.lg8@gmail.com" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">
                    lorik.lg8@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-6 group"
              >
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                  <a href="#" className="text-xl font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    lorikgagica
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 group"
              >
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    Geneva, Switzerland
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-2xl shadow-slate-500/5 dark:shadow-indigo-500/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600/20 transition-all resize-none text-slate-900 dark:text-white"
                />
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-3 group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}