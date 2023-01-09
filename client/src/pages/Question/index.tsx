import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGetPaginatedQuestions } from "../../hooks/question";

export default function Question() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [_answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { isLoading: isLoadingQuestions, data: question } =
    useGetPaginatedQuestions({ offset, limit: 1 });

  const loadMoreQuestions = !(question?.total && question.total === offset + 1);

  const handleCheck = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleClick = () => {
    setAnswers((answers) => [...answers, selectedAnswer]);

    if (loadMoreQuestions) {
      setOffset((offset) => offset + 1);
      setSelectedAnswer("");
    } else {
      navigate("/results");
    }
  };

  return (
    <div>
      <h1>Question {offset + 1}</h1>
      {isLoadingQuestions ? (
        <h2>Loading questions...</h2>
      ) : (
        <>
          <div style={{ textAlign: "left" }}>
            <h3>{question.question}</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {question.answers.map((answer: string) => (
                <li key={answer}>
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                    checked={answer === selectedAnswer}
                    onChange={() => handleCheck(answer)}
                  />
                  {answer}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleClick} disabled={!selectedAnswer}>
            {loadMoreQuestions ? "Next Question" : "Get Results"}
          </button>
        </>
      )}
    </div>
  );
}
