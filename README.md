# Learnly Quiz Application

This is a **Quiz Application** built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The application challenges users with two different types of quiz sections:

- **Section A**: Multiple-choice questions with a 30-second timer and immediate feedback.
- **Section B**: Drag-and-drop questions where users can add or remove items within a 30-second window.

Quiz progress is saved in the browser using LocalStorage, so users can resume the quiz if they refresh the page. After completing both sections, users are shown their final score along with the correct answers.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Two-Section Quiz Flow**:
  - **Section A**: Multiple-choice questions with instructions.
  - **Section B**: Drag-and-drop questions with instructions.
- **Timed Questions**: Each question has a 30-second countdown timer.
- **Immediate Feedback**: For Section A, a brief (1 second) "Correct" or "Wrong" alert is shown after selecting an answer.
- **Drag-and-Drop Functionality**: In Section B, users can drag items into a basket and remove them by dragging them back.
- **Persistence**: Quiz state (including current question, timer, and answers) is saved using LocalStorage.
- **Results Screen**: After both sections, users see their score and the correct answers for each question.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/two-section-quiz.git
   cd two-section-quiz
   ```
