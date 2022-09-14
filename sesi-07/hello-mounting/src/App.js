import Class from "./Clock/Class.js";
import Function from "./Clock/Function.js";
import Clock from "./components/Clock.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import Example from "./components/Example.js";
import HaluFetchClass from "./components/HaluFetchClass.js";
import HaluFetchFunction from "./components/HaluFetchFunction.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clock />
      <hr />
      <ErrorBoundary>
        <Clock />
      </ErrorBoundary>
      <hr />
      <Example />
      <hr />
      <HaluFetchClass />
      <hr />
      <HaluFetchFunction />
      <hr />
      <Class />
      <hr />
      <Function />
    </div>
  );
}

export default App;