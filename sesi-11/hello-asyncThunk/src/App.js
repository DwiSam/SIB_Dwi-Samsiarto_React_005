import { useState } from "react";
import reactLogo from "./assets/reactLogo.svg";
import "./App.css";
import UsersList from "./features/users/userList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <UsersList />
      </main>
    </>
  );
}

export default App;