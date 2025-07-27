import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

export default function SkillsSection() {
  const hardSkills = skillsData.filter(skill => skill.type === 'hard');
  const softSkills = skillsData.filter(skill => skill.type === 'soft');

  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >Habilidades</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <motion.h3
            className="text-xl font-semibold mb-4 text-blue-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >Hard Skills</motion.h3>
          <div className="grid grid-cols-2 gap-4">
            {hardSkills.map(skill => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 bg-white/10 rounded-xl p-3 text-white backdrop-blur-lg border border-white/20 shadow-lg relative"
                variants={itemVariants}
                whileHover={{ scale: 1.12, backgroundColor: '#3b82f6', color: '#fff', boxShadow: '0 4px 24px #3b82f6a0' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <motion.h3
            className="text-xl font-semibold mb-4 text-blue-400"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >Soft Skills</motion.h3>
          <div className="grid grid-cols-2 gap-4">
            {softSkills.map(skill => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 bg-white/10 rounded-xl p-3 text-white backdrop-blur-lg border border-white/20 shadow-lg relative"
                variants={itemVariants}
                whileHover={{ scale: 1.12, backgroundColor: '#3b82f6', color: '#fff', boxShadow: '0 4px 24px #3b82f6a0' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
