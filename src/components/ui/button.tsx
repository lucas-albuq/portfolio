import { cn } from "../../lib/utils";
import type { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <motion.button
      className={cn(
        "px-4 py-2 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg",
        className
      )}
      whileHover={{ scale: 1.08, boxShadow: "0 4px 24px #3b82f6a0" }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    />
  );
}