import { useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
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
      <Outlet />
    </div>
  );
  /* ref is a special props only can be sent via React.reft */
}
