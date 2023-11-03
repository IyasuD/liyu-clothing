import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form /sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";
const Authentication = () => {
  //   useEffect(() => {
  //     const fetchD = async () => {
  //       const response = await getRedirectResult(auth);
  //       console.log(response);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     fetchD();
  //   }, []);
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     //const userDocRef = await createUserDocumentFromAuth(user);
  //     console.log({ user });
  //   };
  return (
    <AuthenticationContainer>
      {/*<h1>Sign In</h1>*/}
      {/*<button onClick={logGoogleUser}>Sign In with Google popup</button>*/}
      {/*<Button onClick={logGoogleUser}></Button>*/}
      {/** <button onClick={signInWithGoogleRedirect}>
        // Sign In with Google RedirectUser //{" "}
      </button>*/}
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;
