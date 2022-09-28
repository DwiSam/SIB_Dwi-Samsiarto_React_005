import { useState } from "react";
import "./App.css";
import AuthLoginForm from "./features/auth/authLoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <AuthLoginForm />
      </main>
    </>
  );
}

export default App;