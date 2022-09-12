
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="Login">
      <div className="container p-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <form id="loginform">
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="text-danger form-text">
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-secondary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login