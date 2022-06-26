import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/action/auth";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: username.current.value,
        password: password.current.value,
      })
    );
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container SignUp p-3">
      <h1 className="mt-4 p-1 text-center">Login page</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group p-2 ">
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Username"
            ref={username}
          />
        </div>

        <div className="form-group p-2">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            ref={password}
          />
        </div>
        <div className="container d-flex align-items-center mt-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="text-center w-100">
            Don't have an account? <Link to="/register">Signup</Link> here
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
