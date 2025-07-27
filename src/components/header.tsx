import { motion } from "framer-motion";
import logo from "../assets/logo-portfolio.svg";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "Sobre mim" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projetos" },
  { href: "#experience", label: "Experiência" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-transparent backdrop-blur"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-5">
        <motion.div
          className="text-xl font-bold tracking-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={logo} alt="Logo" className="h-6 w-auto" />
        </motion.div>
        <nav className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="hover relative"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
            >
              {link.label}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ display: "block" }}
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
