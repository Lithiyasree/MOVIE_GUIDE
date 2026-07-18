import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={notfound} className="img-fluid" />
      <p className="text-center">
        <Link to="/" className="btn btn-danger">Goto Home Page</Link>
      </p>
    </div>
  )
}