import { Link, useRouteError } from "react-router-dom";
import ErrorImage from "./assets/not-found.svg";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img
        style={{ width: "300px", height: "250px" }}
        src={ErrorImage}
        alt="Error image"
      />
      <h1>Oops!</h1>
      <p className="ErrorText">Sorry, an unexpected error has occurred. </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br />
      <Link to={"/"} className="linkComponent">
        Back to home
      </Link>
    </div>
  );
}
