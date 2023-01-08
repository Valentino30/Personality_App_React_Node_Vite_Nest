import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Eager to discover your personality traits?</h1>
      <Link to="/test">
        <button>Take Personality Test</button>
      </Link>
    </div>
  );
}
