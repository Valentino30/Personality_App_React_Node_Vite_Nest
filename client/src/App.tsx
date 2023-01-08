import { useState } from "react";

import { QuestionType } from "./types/question";
import { useGetPaginatedQuestions } from "./hooks/question";

import "./App.css";

function App() {
  const [offset, setOffset] = useState(0);
  const [_answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { isLoading: isLoadingQuestions, data: questions } =
    useGetPaginatedQuestions({ offset, limit: 1 });

  const loadMoreQuestions = !(
    questions?.total && questions.total === offset + 1
  );

  const handleClick = () => {
    setAnswers((answers) => [...answers, selectedAnswer]);
    if (loadMoreQuestions) {
      setOffset((offset) => offset + 1);
    }
  };

  const handleCheck = (answer: string) => {
    setSelectedAnswer(answer);
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
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {question.answers.map((answer) => (
                  <li key={answer}>
                    <input
                      type="checkbox"
                      checked={answer === selectedAnswer}
                      onChange={() => handleCheck(answer)}
                    />
                    {answer}
                  </li>
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
