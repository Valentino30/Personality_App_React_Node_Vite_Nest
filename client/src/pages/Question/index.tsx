import { useState } from "react";
import { useNavigate } from "react-router-dom";

import List from "../../components/List";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CheckBox from "../../components/Checkbox";
import ListItem from "../../components/ListItem";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

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

  if (isLoadingQuestions) return <Header as="h2">Loading questions...</Header>;

  return (
    <>
      {question ? (
        <>
          <Header>{`Question ${offset + 1}`}</Header>
          <Container align="left">
            <Header as="h3">{question.question}</Header>
            <List>
              {question.answers.map((answer: string) => (
                <ListItem key={answer}>
                  <CheckBox
                    checked={answer === selectedAnswer}
                    onChange={() => handleCheck(answer)}
                  />
                  {answer}
                </ListItem>
              ))}
            </List>
          </Container>
          <Button onClick={handleClick} disabled={!selectedAnswer}>
            {loadMoreQuestions ? "Next Question" : "Get Results"}
          </Button>
        </>
      ) : (
        <>
          <Header as="h2">Oops! Something went wrong 🙈</Header>
          <ButtonLink to="/">Go Back</ButtonLink>
        </>
      )}
    </>
  );
}
