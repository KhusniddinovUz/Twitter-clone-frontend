import { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/action/auth";

const SignUp = () => {
  const email = useRef();
  const username = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const submitHandler = (e) => {
    e.preventDefault();
    if (passwordValid() && usernameValid()) {
      dispatch(
        register({
          username: username.current.value,
          email: email.current.value,
          password: password1.current.value,
        })
      );
    }
  };

  const passwordValid = () => {
    if (
      password1.current.value === password2.current.value &&
      password1.current.value.length >= 6
    ) {
      password1.current.className = "form-control";
      password2.current.className = "form-control";
      return true;
    } else {
      password1.current.className += " border-danger";
      password2.current.className += " border-danger";
      return false;
    }
  };

  const usernameValid = () => {
    if (username.current.value.length <= 15) {
      username.current.className = "form-control";
      return true;
    } else {
      username.current.className += " border-danger";
      return false;
    }
  };

  if (auth.isAuthenticated === true) {
    return <Redirect to="/verify-email/" />;
  }

  return (
    <div className="container SignUp p-3">
      <h1 className="mt-4 p-1 text-center">Signup for user profile</h1>
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
          <small>No more than 15 characters</small>
        </div>
        <div className="form-group p-2 ">
          <label htmlFor="email">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={email}
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password1"
            placeholder="Password"
            ref={password1}
          />
          <small>Must be 6 chars at least</small>
        </div>
        <div className="form-group p-2">
          <label htmlFor="password2">Repeat Password</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Password"
            ref={password2}
          />
        </div>
        <div className="container d-flex align-items-center mt-2">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <div className="text-center w-100">
            Already have an account? <Link to="/login">Login</Link> here
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
