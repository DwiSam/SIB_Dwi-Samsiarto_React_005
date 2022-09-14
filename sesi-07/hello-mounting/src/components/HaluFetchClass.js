import React from "react";

export default class HaluFetchClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => this.setState({ todos: data.slice(0, 20) }));
  }

  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            {this.state.todos.map((todo, index) => {
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
      </div>
    );
  }
}