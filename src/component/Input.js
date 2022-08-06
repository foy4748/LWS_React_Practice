import React from "react";

function Input({ type, placeholder }, ref) {
  return <input type="email" placeholder="Your Email Please" ref={ref} />;
}

export default React.forwardRef(Input);
