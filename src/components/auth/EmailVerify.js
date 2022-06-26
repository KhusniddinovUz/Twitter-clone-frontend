import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import sent_email from './email_sent.png'

const EmailVerify = (props) => {
  const auth = useSelector((state) => state.auth);

  if (auth.isVerified === true) {
    return <Redirect to="/home"/>;
  }
  if (auth.isAuthenticated === false) {
    return <Redirect to="/login"/>;
  }
  return (
    <div className='container text-center'>
      <img src={sent_email} alt="sent email" width='400'/>
      <p className='text-center'>
        Verification Email has been sent.
        Please, verify your account to continue
      </p>
    </div>
  );
};

export default EmailVerify;
