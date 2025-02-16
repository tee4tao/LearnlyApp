"use client";
import React, { use, useEffect, useState } from "react";

import { IntroA } from "@/components/IntroA";
import { IntroB } from "@/components/IntroB";
import { Results } from "@/components/Results";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import {
  DragAndDropQuestion,
  MultipleChoiceQuestion,
  QuizState,
} from "@/types";

const sectionAData: MultipleChoiceQuestion[] = [
  {
    id: "q1",
    type: "multiple",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: "q2",
    type: "multiple",
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
];

const sectionBData: DragAndDropQuestion[] = [
  {
    id: "q3",
    type: "drag",
    question: "Drag the correct fruits into the basket.",
    options: ["Apple", "Banana", "Carrot", "Strawberry", "Tomato"],
    correctAnswers: ["Apple", "Banana", "Strawberry"],
  },
  {
    id: "q4",
    type: "drag",
    question: "Drag the correct ocean animals into the aquarium.",
    options: ["Shark", "Lion", "Dolphin", "Elephant", "Whale"],
    correctAnswers: ["Shark", "Dolphin", "Whale"],
  },
];

/** ---------------------------
 *  Local Storage Helpers
 * ----------------------------
 */

const Page = ({ params }) => {
  const { subject } = use(params);
  function loadQuizStateFromLocalStorage(): QuizState {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`quizState_v2_${subject}`);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {}
      }
    }
    return {
      view: "introA",
      currentQuestionIndexA: 0,
      multipleChoiceAnswers: {},
      currentQuestionIndexB: 0,
      dragAnswers: {},
      timer: 30,
      feedback: null,
    };
  }
  function saveQuizStateToLocalStorage(state: QuizState) {
    if (typeof window !== "undefined") {
      localStorage.setItem(`quizState_v2_${subject}`, JSON.stringify(state));
    }
  }
  console.log(subject);

  const [quizState, setQuizState] = useState<QuizState>(() =>
    loadQuizStateFromLocalStorage()
  );

  const {
    view,
    currentQuestionIndexA,
    currentQuestionIndexB,
    multipleChoiceAnswers,
    dragAnswers,
    timer,
    feedback,
  } = quizState;
  const totalA = sectionAData.length;
  const totalB = sectionBData.length;

  // Timer effect
  useEffect(() => {
    if (view === "sectionA" || view === "sectionB") {
      if (timer <= 0) {
        handleNextQuestion();
        return;
      }
      const countdown = setInterval(() => {
        setQuizState((prev) => ({ ...prev, timer: prev.timer - 1 }));
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [view, timer]);

  // Persist state
  useEffect(() => {
    saveQuizStateToLocalStorage(quizState);
  }, [quizState]);

  // Navigation and state functions
  const startSectionA = () => {
    setQuizState((prev) => ({
      ...prev,
      view: "sectionA",
      timer: 30,
      feedback: null,
      currentQuestionIndexA: 0,
    }));
  };

  const startSectionB = () => {
    setQuizState((prev) => ({
      ...prev,
      view: "sectionB",
      timer: 30,
      feedback: null,
      currentQuestionIndexB: 0,
    }));
  };

  const handleNextQuestion = () => {
    if (view === "sectionA") {
      const question = sectionAData[currentQuestionIndexA];
      const userAnswer = multipleChoiceAnswers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;
      // Set feedback to disable interactions
      setQuizState((prev) => ({
        ...prev,
        feedback: isCorrect ? "correct" : "wrong",
      }));
      // After 1 second, move on
      setTimeout(() => {
        setQuizState((prev) => {
          const nextIndex = prev.currentQuestionIndexA + 1;
          if (nextIndex < totalA) {
            return {
              ...prev,
              currentQuestionIndexA: nextIndex,
              timer: 30,
              feedback: null,
            };
          } else {
            return {
              ...prev,
              view: "introB",
              feedback: null,
              timer: 30,
            };
          }
        });
      }, 1000);
    }
    if (view === "sectionB") {
      setQuizState((prev) => {
        const nextIndex = prev.currentQuestionIndexB + 1;
        if (nextIndex < totalB) {
          return {
            ...prev,
            currentQuestionIndexB: nextIndex,
            timer: 30,
          };
        } else {
          return { ...prev, view: "results" };
        }
      });
    }
  };

  const handleSelectOption = (questionId: string, option: string) => {
    setQuizState((prev) => ({
      ...prev,
      multipleChoiceAnswers: {
        ...prev.multipleChoiceAnswers,
        [questionId]: option,
      },
    }));
  };

  // Drag & Drop Handlers
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: string,
    origin: "outside" | "basket"
  ) => {
    e.dataTransfer.setData("text/plain", item);
    e.dataTransfer.setData("origin", origin);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    questionId: string,
    target: "outside" | "basket"
  ) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    const origin = e.dataTransfer.getData("origin") as "outside" | "basket";
    setQuizState((prev) => {
      const currentBasket = prev.dragAnswers[questionId] || [];
      if (target === "basket") {
        if (!currentBasket.includes(item)) {
          return {
            ...prev,
            dragAnswers: {
              ...prev.dragAnswers,
              [questionId]: [...currentBasket, item],
            },
          };
        }
      }
      if (target === "outside") {
        if (currentBasket.includes(item)) {
          return {
            ...prev,
            dragAnswers: {
              ...prev.dragAnswers,
              [questionId]: currentBasket.filter((x) => x !== item),
            },
          };
        }
      }
      return prev;
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const resetQuiz = () => {
    localStorage.removeItem(`quizState_v2_${subject}`);
    window.location.reload();
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">{subject} Quiz</h1>
      {view === "introA" && <IntroA onStart={startSectionA} />}
      {view === "sectionA" && (
        <SectionA
          question={sectionAData[currentQuestionIndexA]}
          questionNumber={currentQuestionIndexA + 1}
          total={totalA}
          selectedAnswer={
            multipleChoiceAnswers[sectionAData[currentQuestionIndexA].id]
          }
          onSelectOption={handleSelectOption}
          onNext={handleNextQuestion}
          timer={timer}
          feedback={feedback}
        />
      )}
      {view === "introB" && <IntroB onStart={startSectionB} />}
      {view === "sectionB" && (
        <SectionB
          question={sectionBData[currentQuestionIndexB]}
          questionNumber={currentQuestionIndexB + 1}
          total={totalB}
          dragAnswers={dragAnswers}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onNext={handleNextQuestion}
          timer={timer}
        />
      )}
      {view === "results" && (
        <Results
          sectionAData={sectionAData}
          sectionBData={sectionBData}
          multipleChoiceAnswers={multipleChoiceAnswers}
          dragAnswers={dragAnswers}
          onRestart={resetQuiz}
        />
      )}
    </div>
  );
};

export default Page;
