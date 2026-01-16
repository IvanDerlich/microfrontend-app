import React from "react";
import ReactDOM from "react-dom";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<h1>Marketing Module</h1>, el);
};

if (window.__MICRO_FRONTEND_CONTAINER__) {
  console.log(
    "Marketing App running as a micro-frontend application integrated to a container."
  );
} else {
  console.log("Marketing App running in isolation. Mounting immediately.");
  const el = document.querySelector("#_marketing-dev-root");
  if (!el) throw new Error("No root element found to mount the Marketing app.");

  mount(el);
}

export { mount };
