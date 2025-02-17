import { motion } from "motion/react";
interface IntroAProps {
  onStart: () => void;
}
export const IntroA: React.FC<IntroAProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-xl w-full bg-white p-6 rounded shadow"
    >
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-2xl  font-semibold  mb-4"
      >
        Section A Instructions
      </motion.h2>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mb-4"
      >
        Welcome to <strong>Section A</strong>. You will have{" "}
        <strong>30 seconds</strong> per question. Pick the correct answer and
        click Next.
      </motion.p>
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        onClick={onStart}
        className="bg-purple-700 text-white px-4 py-2 rounded"
      >
        Start Section A
      </motion.button>
    </motion.div>
  );
};
