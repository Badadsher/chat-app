import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import "../styles/Auth.css";
const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="all">
      <div className="auth">
        <p className="sign">Sign In With Google To Continue</p>
        <button className="enterbt" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};
