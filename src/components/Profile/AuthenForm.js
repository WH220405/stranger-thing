import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import authenticate from "../../utils/data";

import classes from "./AuthenForm.module.css";
// useActionsData only get Data if action return something

function AuthenForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  // do not need set because will update qurey parameters with that Link
  const isLogin = searchParams.get("mode") === "login";
  //set if currently mode is login set login, if not
  //get methos that allow to retrieve the value for specific query parameter.
  const isSubmitting = navigation.state === "submitting";

  //   const token = authenticate();
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          //build in a function provided by javascript object,value to go through
          // all the values in this errors object // map erry message to lis items
          <ul>
            {Object.values(data.errors).map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="username">UserName:</label>
          <input id="username" type="username" name="username" required />
        </p>
        <p>
          <label htmlFor="image">Password:</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthenForm;
