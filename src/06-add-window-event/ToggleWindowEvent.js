import { useState, useEffect } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);
  useEffect(() => {
    const doubleClick = () => alert("Mouse pressed");
    window.addEventListener("dblclick", doubleClick);
    return () => window.removeEventListener("dblclick", doubleClick);
  }, []);
  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      {windowEvent && <WindowEvent />}
    </div>
  );
}
