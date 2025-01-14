import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, withAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import viteLogo from "/vite.svg";
import "./App.css";

export type ButtonPropTypes = typeof Button.propTypes;
// verify correct extension of `React.ForwardRefExoticComponent`
export type ButtonDefaultProps = typeof Button.defaultProps;

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div>
        <Button ref={ref} />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const MyApp = withAuthenticator(App);
export default MyApp;
