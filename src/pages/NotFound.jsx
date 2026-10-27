import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="not-found-page">
            <div className="not-found-content">
                <span>404 ERROR</span>

                <h1>Page Not Found</h1>

                <p>
                    Sorry, the page you are looking for does not exist
                    or may have been moved.
                </p>

                <div className="not-found-actions">
                    <Link to="/">
                        Go to Home
                    </Link>

                    <Link to="/diseases">
                        Explore Diseases
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default NotFound;