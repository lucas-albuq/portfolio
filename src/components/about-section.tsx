import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/lucas-albuq/", icon: <FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/lucas-albuq/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:luuinhasalbuquerque@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[#001431] z-0" />
      <div className="relative max-w-6xl mx-auto py-24 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full z-0" style={{
              background: "radial-gradient(circle at 60% 40%, #2563eb 0%, #001431 80%)",
              filter: "blur(32px)",
              opacity: 0.7
            }} />
            <img
              src={profileImg}
              alt="Lucas"
              className="w-96 h-96 object-cover rounded-full border-4 border-blue-600 border-double shadow-2xl z-10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-blue-600/40"
              style={{ position: "relative" }}
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/30 z-20 pointer-events-none" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold mb-2">Sobre mim</h2>
          <p className="text-lg text-white/80 mb-2">Sou apaixonado por tecnologia, design e desenvolvimento web. Tenho experiência em projetos institucionais, eventos e plataformas digitais, sempre buscando unir funcionalidade e estética. Vamos conectar?</p>
          <div className="mt-4">
            <span className="block text-blue-200 font-semibold mb-2">Conecte-se comigo:</span>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full shadow-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-2xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
