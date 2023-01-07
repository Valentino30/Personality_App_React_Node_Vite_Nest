import { QuestionType } from "./types/question";
import { useGetQuestions } from "./hooks/question";

import "./App.css";

function App() {
  const { isLoading: isLoadingQuestions, data: questions } = useGetQuestions();

  return (
    <div className="App">
      <h1>Personality App</h1>
      {isLoadingQuestions ? (
        <h2>Loading questions...</h2>
      ) : (
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          {questions.map((question: QuestionType) => (
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
    </div>
  );
}

export default App;
