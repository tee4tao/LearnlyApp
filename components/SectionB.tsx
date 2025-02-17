import { SectionBProps } from "@/types";
import React from "react";
import "drag-drop-touch"; // Makes (onDragStart, onDragOver, and onDrop) respond more immediately on mobile.

const SectionB = ({
  question,
  questionNumber,
  total,
  dragAnswers,
  onDragStart,
  onDrop,
  onDragOver,
  onNext,
  timer,
}: SectionBProps) => {
  const basketItems = dragAnswers[question.id] || [];
  const outsideItems = question.options.filter(
    (item) => !basketItems.includes(item)
  );
  return (
    <div className="max-w-2xl w-full bg-white p-6 rounded shadow">
      {/* Timer and progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">
          Question {questionNumber} of {total}
        </span>
        <span className="text-red-600 font-bold">Time: {timer}s</span>
      </div>

      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>

      {/* Outside Items Zone */}
      <div
        className="border border-gray-300 rounded p-3 mb-4 min-h-[60px] flex flex-wrap gap-2"
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, question.id, "outside")}
      >
        {outsideItems.length === 0 ? (
          <p className="text-gray-400 italic">No items here.</p>
        ) : (
          outsideItems.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={(e) => onDragStart(e, item, "outside")}
              className="cursor-move bg-purple-100 text-purple-700 px-3 py-1 rounded"
            >
              {item}
            </div>
          ))
        )}
      </div>

      {/* Basket Zone */}
      <div
        className="border border-green-400 rounded p-3 mb-4 min-h-[60px] flex flex-wrap gap-2 bg-green-50"
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, question.id, "basket")}
      >
        {basketItems.length === 0 ? (
          <p className="text-green-800 italic">Drop items here.</p>
        ) : (
          basketItems.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={(e) => onDragStart(e, item, "basket")}
              className="cursor-move bg-green-200 text-green-800 px-3 py-1 rounded"
            >
              {item}
            </div>
          ))
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SectionB;
