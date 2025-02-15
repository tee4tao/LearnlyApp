import { ResultsProps } from "@/types";
import { IoCloseCircle, IoCheckmarkCircle } from "react-icons/io5";

export const Results: React.FC<ResultsProps> = ({
  sectionAData,
  sectionBData,
  multipleChoiceAnswers,
  dragAnswers,
  onRestart,
}) => {
  const calculateScore = (): number => {
    let score = 0;
    sectionAData.forEach((q) => {
      if (multipleChoiceAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    sectionBData.forEach((q) => {
      const userBasket = dragAnswers[q.id] || [];
      const correctSet = new Set(q.correctAnswers);
      const userSet = new Set(userBasket);
      if (
        correctSet.size === userSet.size &&
        [...correctSet].every((x) => userSet.has(x))
      ) {
        score++;
      }
    });
    return score;
  };

  const totalQuestions = sectionAData.length + sectionBData.length;
  const score = calculateScore();

  return (
    <div className="max-w-xl w-full bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      <p className="mb-4">
        You scored <strong>{score}</strong> out of {totalQuestions}.
      </p>
      <div className="space-y-4">
        {/* Section A results */}
        {sectionAData.map((q) => (
          <div key={q.id} className="border rounded p-3">
            <p className="font-semibold">{q.question}</p>
            <p className="flex items-center gap-1">
              <strong>Your Answer:</strong>{" "}
              {multipleChoiceAnswers[q.id] || "Not answered"}
              {multipleChoiceAnswers[q.id] === q.correctAnswer ? (
                <IoCheckmarkCircle className="text-green-600 text-xl" />
              ) : (
                <IoCloseCircle className="text-red-600 text-xl" />
              )}
            </p>
            <p>
              <strong>Correct Answer:</strong> {q.correctAnswer}
            </p>
          </div>
        ))}
        {/* Section B results */}
        {sectionBData.map((q) => (
          <div key={q.id} className="border rounded p-3">
            <p className="font-semibold">{q.question}</p>
            <p className="flex items-center gap-1">
              <strong>Your Items:</strong>{" "}
              {dragAnswers[q.id] && dragAnswers[q.id].length > 0
                ? dragAnswers[q.id].join(", ")
                : "None"}{" "}
              {JSON.stringify(dragAnswers[q.id]) ===
              JSON.stringify(q.correctAnswers) ? (
                <IoCheckmarkCircle className="text-green-600 text-xl" />
              ) : (
                <IoCloseCircle className="text-red-600 text-xl" />
              )}
            </p>
            <p>
              <strong>Correct Items:</strong> {q.correctAnswers.join(", ")}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={onRestart}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};
