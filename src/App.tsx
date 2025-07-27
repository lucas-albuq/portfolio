import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/hero-section";
import ExperienceSection from "./components/experience-section";
import ProjectSection from "./components/project-section";
import SkillsSection from "./components/skills-section";
import ContactSection from "./components/contact-section";
import Header from "./components/header";
import Cursor from "./components/cursor";
import AboutSection from "./components/about-section";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#0b1120] text-white min-h-screen overflow-hidden">
      <Cursor />
      <Header />
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-[#0b1120] z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
              className="w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"
            />
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full px-0"
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}