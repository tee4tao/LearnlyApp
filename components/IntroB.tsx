interface IntroBProps {
  onStart: () => void;
}
export const IntroB: React.FC<IntroBProps> = ({ onStart }) => {
  return (
    <div className="max-w-xl w-full bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Section B Instructions</h2>
      <p className="mb-4">
        You are now about to start <strong>Section B</strong>, which is a
        drag-and-drop section. You have <strong>30 seconds</strong> per
        question. Drag the correct items into the box and remove them by
        dragging them back out.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Start Section B
      </button>
    </div>
  );
};
