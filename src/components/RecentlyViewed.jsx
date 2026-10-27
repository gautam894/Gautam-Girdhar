import { Link } from "react-router-dom";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";

function RecentlyViewed() {
    const {
        recentlyViewed,
        clearRecentlyViewed
    } = useRecentlyViewed();

    if (recentlyViewed.length === 0) {
        return null;
    }

    return (
        <section className="recently-viewed">

            <div className="section-heading">
                <span>YOUR ACTIVITY</span>

                <h2>Recently Viewed</h2>

                <p>
                    Quickly return to information you viewed recently.
                </p>
            </div>

            <div className="recently-viewed-actions">
                <button
                    type="button"
                    onClick={clearRecentlyViewed}
                >
                    Clear History
                </button>
            </div>

            <div className="recently-viewed-grid">

                {recentlyViewed.map((item) => (

                    <Link
                        key={`${item.type}-${item.id}`}
                        to={
                            item.type === "medicine"
                                ? `/medicines/${item.id}`
                                : `/diseases/${item.id}`
                        }
                        className="recently-viewed-card"
                    >

                        <span>
                            {item.type === "medicine"
                                ? "Medicine"
                                : "Disease"}
                        </span>

                        <h3>
                            {item.name}
                        </h3>

                        <strong>
                            View Details →
                        </strong>

                    </Link>

                ))}

            </div>

        </section>
    );
}

export default RecentlyViewed;