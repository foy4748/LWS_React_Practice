import { useState } from "react";

export default function StateHook() {
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    color: "dark",
  });

  return (
    <div>
      <p
        onClick={() =>
          setTheme((prevTheme) => {
            /* This will cause the backgroundColor undefined 
            if (prevTheme.color === "white") {
              return { color: "dark" };
            } else {
              return { color: "white" };
            }
			*/
            if (prevTheme.color === "white") {
              return { ...prevTheme, color: "dark" };
            } else {
              return { ...prevTheme, color: "white" };
            }
          })
        }
      >
        Now backgroundColor is {theme.backgroundColor}
        <br />
        Now textColor is {theme.color}
      </p>
    </div>
  );
}
