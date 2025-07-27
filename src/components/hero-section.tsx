import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import AnimatedBackground from "./animated-background";

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center h-180 overflow-hidden">
      <AnimatedBackground />
      <div className="relative w-full flex items-center justify-center">
        <motion.div
          className="z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">Lucas Albuquerque</h1>
          <p className="text-xl text-white/80 mb-8">Desenvolvedor FullStack | UI/UX Designer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 text-lg px-6 py-3"
              as="a"
              href="https://drive.google.com/file/d/1AvNxA3LIsri7If4_EYUUaJTiFgtGze2J/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="text-white text-xl" />
              Baixe meu currículo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}