import { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../action/auth';

const SignUp = () => {
  const email = useRef();
  const username = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [border, setBorder] = useState('form-control');
  const submitHandler = (e) => {
    e.preventDefault();
    if (passwordValid()) {
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
      password1.current.value.length > 6
    ) {
      setBorder('form-control');
      return true;
    } else {
      setBorder('border-danger form-control');
      return false;
    }
  };

  if (auth.isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='container SignUp p-3'>
      <h1 className='mt-4 p-1 text-center'>Signup for user profile</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group p-2 '>
          <label htmlFor='username'>Username</label>
          <input
            required
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter Username'
            ref={username}
          />
        </div>
        <div className='form-group p-2 '>
          <label htmlFor='email'>Email address</label>
          <input
            required
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            placeholder='Enter email'
            ref={email}
          />
        </div>
        <div className='form-group p-2'>
          <label htmlFor='password1'>Password</label>
          <input
            type='password'
            className={border}
            id='password1'
            placeholder='Password'
            ref={password1}
          />
          <small>Must be 6 chars at least</small>
        </div>
        <div className='form-group p-2'>
          <label htmlFor='password2'>Repeat Password</label>
          <input
            type='password'
            className={border}
            id='password2'
            placeholder='Password'
            ref={password2}
          />
        </div>
        <div className='container d-flex align-items-center mt-2'>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
          <div className='text-center w-100'>
            Already have an account? <Link to='/login'>Login</Link> here
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
