import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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
    <div>
      <h1>You got it!</h1>
      <p>Congrats you've just completed your personality test!</p>
      <p>
        Turns out you are a <strong>{personality}</strong>
      </p>
      <Link to="/">
        <button>Retake Test</button>
      </Link>
    </div>
  );
}
