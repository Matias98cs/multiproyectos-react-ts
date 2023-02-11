import { useEffect, useState } from "react";

// words with 5 letters and no spacial characters
const WORDS = [
  "abel",
  "ad",
  "awesome",
  "average",
  "aventure",
  "abreak",
  "abreast",
  "abnormal",
];

export default function WordsPerMinute() {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [characterCount, setCharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (buffer === word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setCharacterCount((characterCount) => characterCount + word.length);
    }
    setBuffer("");
  }

  useEffect(() => {
    if (time != 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);

      return () => clearTimeout(timeout);
    }
  }, [time]);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        textAlign: "center",
      }}
    >
      {Boolean(time) && <h1 style={{ fontSize: 48 }}>{word}</h1>}
      <h2>Charactares typed: {characterCount}</h2>
      <h3>Remaning time: {time}</h3>
      {time ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={() => setTime(60)}>Play</button>
      )}
    </div>
  );
}
