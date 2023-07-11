import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';

import { auth, sighInWithGooglePopup, sighInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await sighInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await sighInWithGoogleRedirect();
  //   console.log({ user });
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={sighInWithGoogleRedirect}>Sign in with Google Redirect</button>
      <br/>
      <SignUpForm />
    </div>
  );
};

export default SignIn;