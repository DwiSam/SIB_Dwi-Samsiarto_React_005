import React from "react";


class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user01",
      password: "1122",
    };
  }

  //   create function > return component
  getUsername() {
    return this.state.username;
  }

  getPass() {
    return this.state.password;
  }

  // create function > change button
  setUsername = () => {
    this.setState({
      username: "user02",
      password: "3344",
    });
  };

  render() {
    return (
      <>
        <div className="text-center">
          <h1>Belajar State : {this.state.username}</h1>;
          {/* step one get this.state */}
          {/* <div className="row">
            <div className="col">Username : {this.state.username}</div>
            <div className="col">Password : {this.state.password}</div>
          </div> */}
          {/* step two getUsername this.state */}
          {/* <div className="row">
            <div className="col">Username : {this.getUsername()}</div>
            <div className="col">Password : {this.getPass()}</div>
          </div> */}
          {/* step three set data baru state */}
          <div className="row">
            <div className="col">
              Lihat perubahan set data &gt; Username : {this.getUsername()}
            </div>
            <div className="col">Lihat perubahan set data &gt; Password : {this.getPass()}</div>
          </div>
          <button onClick={this.setUsername}>Set Username</button>
        </div>
      </>
    );
  }
}

export default Users;