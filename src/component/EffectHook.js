import { useReducer, useEffect } from "react";

const initialState = {
  isLoaded: true,
  fact: "Loading...",
};

const reducerFunc = (currState, action) => {
  switch (action.type) {
    case "LOADED":
      return { isLoaded: true, fact: action.fact };
    case "RELOAD":
      return { isLoaded: false, fact: "" };
    default:
      return currState;
  }
};

export default function EffectHook() {
  /* Now Defining these states using useReducer()
   */
  /*"https://catfact.ninja/fact"
  const [fact, setFact] = useState("Loading...");
  const [isLoaded, setLoaded] = useState(true);
	*/

  const [fact, factDispatcher] = useReducer(reducerFunc, initialState);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        factDispatcher({ type: "LOADED", fact: data.fact });
      });
  }, []);

  useEffect(() => {
    if (!fact.isLoaded) {
      fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
          factDispatcher({ type: "LOADED", fact: data.fact });
        });
    }
  }, [fact.isLoaded]);

  return (
    <div style={{ marginBottom: "5rem" }}>
      <h1>Interesting Cat facts</h1>
      <p>{fact.isLoaded ? fact.fact : "Loading..."}</p>
      <button type="button" onClick={() => factDispatcher({ type: "RELOAD" })}>
        Reload
      </button>
    </div>
  );
}
