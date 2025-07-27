import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import { ExternalLink } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function ProjectSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.name}
            className="bg-white/10 rounded-xl p-6 backdrop-blur-lg border border-white/20 text-white relative overflow-hidden flex flex-col"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #3b82f6a0', y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-60"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: 'left' }}
            />
            {/* <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4 border border-blue-600" /> */}
            <motion.h3
              className="text-xl font-semibold mb-2"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >{project.name}</motion.h3>
            <motion.p
              className="text-white/80 mb-4"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >{project.description}</motion.p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-blue-600/80 text-xs rounded-full text-white font-semibold shadow">
                  {tech}
                </span>
              ))}
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg mt-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.08, backgroundColor: '#2563eb' }}
            >
              <ExternalLink size={18} /> Acessar projeto
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}