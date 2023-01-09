export default function Results() {
  const personalities = [
    "Director 😎",
    "Thinker 🧠",
    "Supporter 💪",
    "Socializer 🥳",
  ];
  const personality = personalities[Math.floor(Math.random() * 4)];

  return (
    <div>
      <h1>You got it!</h1>
      <p>Congrats you've just completed your personality test!</p>
      <p>
        Turns out you are a <strong>{personality}</strong>
      </p>
    </div>
  );
}
