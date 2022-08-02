import { useState, useEffect } from "react";

export default function EffectHook() {
  const [fact, setFact] = useState("Loading...");
  const [isLoaded, setLoaded] = useState(true);

  //Fetching Cat Facts
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((data) => data.json())
      .then(({ fact }) => {
        setFact(fact);
      })
      .catch(() => {
        setFact("Something went wrong");
      });
  }, []);

  //Reloading Cat Fact
  //If Reload is pressed
  useEffect(() => {
    if (!isLoaded) {
      fetch("https://catfact.ninja/fact")
        .then((data) => data.json())
        .then(({ fact }) => {
          setFact(fact);
          setLoaded((prevStatus) => !prevStatus);
        })
        .catch(() => {
          setFact("Something went wrong");
        });
    }
  }, [isLoaded]);

  return (
    <div style={{ marginBottom: "5rem" }}>
      <h1>Interesting Cat facts</h1>
      <p>{isLoaded ? fact : "Loading..."}</p>
      <button
        type="button"
        onClick={() => setLoaded((prevStatus) => !prevStatus)}
      >
        Reload
      </button>
    </div>
  );
}
