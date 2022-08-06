import { useRef, useEffect } from "react";
import Input from "./Input";

export default function RefHook() {
  const subscribeEmail = useRef();

  useEffect(() => {
    subscribeEmail.current.focus();
  }, []);

  return (
    <div>
      <form>
        <label for="name">
          Subscribe:
          <Input
            type="email"
            placeholder="Your Email Please"
            ref={subscribeEmail}
          />
        </label>
      </form>
    </div>
  );
  /* ref is a special props only can be sent via React.reft */
}
