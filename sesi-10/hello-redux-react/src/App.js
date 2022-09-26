import "./App.css";
import CounterClass from "./features/counter/counterClass";
import CounterFn from "./features/counter/counterFn";

const App = () => {
  return (
    <div className="App">
      <CounterFn />
      <CounterClass />
    </div>
  );
}

export default App;