import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 className="display-1 text-info mb-4">404</h1>
      <h2 className="h2 fw-semibold mb-2">Page Not Found</h2>
      <p className="text-secondary mb-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-info px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
