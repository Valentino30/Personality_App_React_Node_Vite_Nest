import { useState } from "react";

import { QuestionType } from "./types/question";
import { useGetPaginatedQuestions } from "./hooks/question";

import "./App.css";

function App() {
  const [offset, setOffset] = useState(0);
  const { isLoading: isLoadingQuestions, data: questions } =
    useGetPaginatedQuestions({ offset, limit: 1 });

  const loadMoreQuestions = !(
    questions?.total && questions.total === offset + 1
  );

  const handleClick = () => {
    if (loadMoreQuestions) {
      setOffset((offset) => offset + 1);
    }
  };

  return (
    <div className="App">
      <h1>Personality App</h1>
      {isLoadingQuestions ? (
        <h2>Loading questions...</h2>
      ) : (
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          {questions.questions.map((question: QuestionType) => (
            <li key={question.id}>
              <h3>{question.question}</h3>
              <ul>
                {question.answers.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClick}>
        {loadMoreQuestions ? "Next Question" : "Get Results"}
      </button>
    </div>
  );
}

export default App;
