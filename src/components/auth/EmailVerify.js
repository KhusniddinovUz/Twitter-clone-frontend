import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const EmailVerify = (props) => {
  const auth = useSelector((state) => state.auth);

  if (auth.isVerified === true) {
    return <Redirect to="/home" />;
  }
  if (auth.isAuthenticated === false) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      Verification Email has been sent
      <br />
      Please, verify your account to continue
    </div>
  );
};

export default EmailVerify;
