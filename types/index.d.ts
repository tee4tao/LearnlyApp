export interface MultipleChoiceQuestion {
  id: string;
  type: "multiple";
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface DragAndDropQuestion {
  id: string;
  type: "drag";
  question: string;
  options: string[];
  correctAnswers: string[];
}

export type QuizView =
  | "introA"
  | "sectionA"
  | "introB"
  | "sectionB"
  | "results";

export interface QuizState {
  view: QuizView;
  // Section A
  currentQuestionIndexA: number;
  multipleChoiceAnswers: Record<string, string>;
  // Section B
  currentQuestionIndexB: number;
  dragAnswers: Record<string, string[]>;
  // Timer and feedback
  timer: number;
  feedback: "correct" | "wrong" | null;
}

export interface ResultsProps {
  sectionAData: MultipleChoiceQuestion[];
  sectionBData: DragAndDropQuestion[];
  multipleChoiceAnswers: Record<string, string>;
  dragAnswers: Record<string, string[]>;
  onRestart: () => void;
}

export interface SectionBProps {
  question: DragAndDropQuestion;
  questionNumber: number;
  total: number;
  dragAnswers: Record<string, string[]>;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    item: string,
    origin: "outside" | "basket"
  ) => void;
  onDrop: (
    e: React.DragEvent<HTMLDivElement>,
    questionId: string,
    target: "outside" | "basket"
  ) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onNext: () => void;
  timer: number;
}

export interface SectionAProps {
  question: MultipleChoiceQuestion;
  questionNumber: number;
  total: number;
  selectedAnswer: string | undefined;
  onSelectOption: (questionId: string, option: string) => void;
  onNext: () => void;
  timer: number;
  feedback: "correct" | "wrong" | null;
}
