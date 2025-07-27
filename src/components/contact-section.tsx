import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [
  {
    href: "https://github.com/lucas-albuq/",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/lucas-albuq/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "mailto:luuinhasalbuquerque@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.18 } }
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >Contato</motion.h2>
      <motion.p
        className="text-white/70 mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >Fique à vontade para entrar em contato comigo pelas redes abaixo ou enviar um e-mail. Estou sempre aberto para novas oportunidades, projetos e parcerias!</motion.p>
      <div className="flex justify-center gap-8 text-3xl">
        {icons.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            whileHover={{ scale: 1.2, color: '#3b82f6', rotate: 8 }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label={item.label}
          >
            <span className="flex items-center gap-2">
              <span className="bg-white/10 p-3 rounded-full shadow-lg border border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <span className="text-base font-semibold group-hover:text-blue-500 transition-colors">{item.label}</span>
            </span>
            <motion.span
              className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >Clique para acessar</motion.span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}