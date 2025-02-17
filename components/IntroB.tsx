import { motion } from "motion/react";
interface IntroBProps {
  onStart: () => void;
}
export const IntroB: React.FC<IntroBProps> = ({ onStart }) => {
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
        className="text-lg md:text-2xl  font-semibold mb-4"
      >
        Section B Instructions
      </motion.h2>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mb-4"
      >
        You are now about to start <strong>Section B</strong>, which is a
        drag-and-drop section. You have <strong>30 seconds</strong> per
        question. Drag the correct items into the box and remove them by
        dragging them back out.
      </motion.p>
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        onClick={onStart}
        className="bg-purple-700 text-white px-4 py-2 rounded"
      >
        Start Section B
      </motion.button>
    </motion.div>
  );
};
