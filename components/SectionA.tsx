import { SectionAProps } from "@/types";
import React from "react";
import { motion } from "motion/react";

const SectionA = ({
  question,
  questionNumber,
  total,
  selectedAnswer,
  onSelectOption,
  onNext,
  timer,
  feedback,
}: SectionAProps) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl w-full bg-white p-6 rounded shadow relative"
    >
      {/* Timer and progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">
          Question {questionNumber} of {total}
        </span>
        <span className="text-red-600 font-bold">Time: {timer}s</span>
      </div>

      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <div className="space-y-2 mb-6">
        {question.options.map((option, index: number) => (
          <motion.label
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index / 10 }}
            key={option}
            className="flex items-center"
          >
            <input
              type="radio"
              name={question.id}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectOption(question.id, option)}
              disabled={feedback !== null} // disable during feedback period
              className="mr-2"
            />
            {option}
          </motion.label>
        ))}
      </div>

      {/* Feedback Badge */}
      {feedback && (
        <div
          className={`absolute top-2 right-2 px-3 py-1 rounded text-white ${
            feedback === "correct" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {feedback === "correct" ? "Correct!" : "Wrong!"}
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          onClick={onNext}
          disabled={feedback !== null} // disable Next button during feedback
          className="bg-purple-700 text-white px-4 py-2 rounded"
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SectionA;
