import { useReducer } from "react";

export default function ReducerHook() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus5":
        return state + action.value;
      case "plus1":
        return state + action.value;
      case "minus5":
        return state + action.value;
      case "minus1":
        return state + action.value;
      default:
        return state;
    }
  };
  const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>Reducer Hook {count}</p>
      <button
        type="button"
        onClick={() => countDispatch({ type: "plus1", value: 1 })}
      >
        Increase 1+
      </button>
      <button
        type="button"
        onClick={() => countDispatch({ type: "plus5", value: 5 })}
      >
        Increase 5+
      </button>
      <button
        type="button"
        onClick={() => countDispatch({ type: "minus5", value: -5 })}
      >
        Decrease 5-
      </button>
      <button
        type="button"
        onClick={() => countDispatch({ type: "minus1", value: -1 })}
      >
        Decrease 1-
      </button>
    </div>
  );
}
