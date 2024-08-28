import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>sorry, page not found</h2>
      <Link to="/">Back to homepage... </Link>
    </div>
  );
}

export default NotFound;
