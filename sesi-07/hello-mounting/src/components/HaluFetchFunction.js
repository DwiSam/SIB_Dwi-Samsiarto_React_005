import React, { useEffect, useState } from "react";

export default function HaluFetchFunction() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 20)));
  }, []);

  return (
    <div>
      {todos ? (
        <table className="table">
          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "v" : "x"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </div>
  );
}