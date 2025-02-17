interface IntroAProps {
  onStart: () => void;
}
export const IntroA: React.FC<IntroAProps> = ({ onStart }) => {
  return (
    <div className="max-w-xl w-full bg-white p-6 rounded shadow">
      <h2 className="text-lg md:text-2xl  font-semibold  mb-4">
        Section A Instructions
      </h2>
      <p className="mb-4">
        Welcome to <strong>Section A</strong>. You will have{" "}
        <strong>30 seconds</strong> per question. Pick the correct answer and
        click Next.
      </p>
      <button
        onClick={onStart}
        className="bg-purple-700 text-white px-4 py-2 rounded"
      >
        Start Section A
      </button>
    </div>
  );
};
