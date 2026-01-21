import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}
