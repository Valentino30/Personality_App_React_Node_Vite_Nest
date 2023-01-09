import { useEffect } from "react";
import { toast } from "react-toastify";

import Text from "../../components/Text";
import Header from "../../components/Header";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

export default function Results() {
  const personalities = [
    "Director 😎",
    "Thinker 🧠",
    "Supporter 💪",
    "Socializer 🥳",
  ];
  const personality = personalities[Math.floor(Math.random() * 4)];

  useEffect(() => {
    toast.success("Test Completed! 🎉");
  }, []);

  return (
    <Container>
      <Header>You got it!</Header>
      <Text>Congrats you've just completed your personality test!</Text>
      <Text>
        Turns out you are a <strong>{personality}</strong>
      </Text>
      <ButtonLink to="/">Retake Test</ButtonLink>
    </Container>
  );
}
