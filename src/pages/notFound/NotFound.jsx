import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
function NotFound() {
  return (
    <section className="notFound">
      <div className="container notfount__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
