import { Card, CardContent } from "../components/ui/card";
import experiences from "../data/experiences.json";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const profissional = experiences.filter((exp: any) => exp.type === "profissional" || !exp.type);
const academica = experiences.filter((exp: any) => exp.type === "academica");

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="max-w-7xl py-20 mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >Experiências</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Profissional</h3>
          <ol className="relative border-l border-white/20 ml-4">
            {profissional.map((exp, i) => (
              <motion.li
                key={i}
                className="mb-10 ml-6"
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg"></span>
                <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <motion.h3
                        className="text-xl font-bold mb-1 md:mb-0"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >{exp.company}</motion.h3>
                      <motion.span
                        className="text-sm text-blue-400 font-semibold"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >{exp.period}</motion.span>
                    </div>
                    <motion.p
                      className="text-white/80 mb-2"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >{exp.role}</motion.p>
                    <motion.p
                      className="text-white/60"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >{exp.description}</motion.p>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Acadêmica</h3>
          <ol className="relative border-l border-white/20 ml-4">
            {academica.length === 0 && (
              <li className="ml-6 text-white/60">Nenhuma experiência acadêmica cadastrada.</li>
            )}
            {academica.map((exp, i) => (
              <motion.li
                key={i}
                className="mb-10 ml-6"
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg"></span>
                <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <motion.h3
                        className="text-xl font-bold mb-1 md:mb-0"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >{exp.company}</motion.h3>
                      <motion.span
                        className="text-sm text-blue-400 font-semibold"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >{exp.period}</motion.span>
                    </div>
                    <motion.p
                      className="text-white/80 mb-2"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >{exp.role}</motion.p>
                    <motion.p
                      className="text-white/60"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >{exp.description}</motion.p>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  );
}
