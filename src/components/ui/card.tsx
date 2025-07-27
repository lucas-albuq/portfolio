import { cn } from "../../lib/utils";
import type { ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

interface CardProps extends MotionProps {
  className?: string;
  children?: ReactNode;
}

export function Card({ className, children, ...motionProps }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl shadow-md border bg-white/10 backdrop-blur-xl p-4",
        className
      )}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #3b82f6a0" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

interface CardContentProps extends MotionProps {
  className?: string;
  children?: ReactNode;
}

export function CardContent({ className, children, ...motionProps }: CardContentProps) {
  return (
    <motion.div
      className={cn("p-4", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}