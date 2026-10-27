import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function MedicineCard({ medicine }) {
    const { toggleFavorite, isFavorite } = useFavorites();

    const saved = isFavorite(medicine.id);

    return (
        <article className="medicine-card">

            <div className="medicine-card-content">

                {/* Card Top */}

                <div className="medicine-card-top">

                    <span className="medicine-category">
                        {medicine.category}
                    </span>

                    <button
                        className="favorite-button"
                        onClick={() =>
                            toggleFavorite(medicine.id)
                        }
                        type="button"
                        aria-label={
                            saved
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }
                    >
                        {saved ? "★" : "☆"}
                    </button>

                </div>


                {/* Medicine Name */}

                <h3>
                    {medicine.name}
                </h3>


                {/* Generic Name */}

                <p className="generic-name">
                    Generic Name: {medicine.genericName}
                </p>


                {/* Description */}

                <p className="medicine-description">
                    {medicine.description}
                </p>


                {/* Common Uses */}

                <div className="medicine-uses">

                    <h4>
                        Common Uses
                    </h4>

                    <ul>
                        {medicine.commonUses.map(
                            (use, index) => (
                                <li key={index}>
                                    {use}
                                </li>
                            )
                        )}
                    </ul>

                </div>


                {/* Details Button */}

                <Link
                    className="medicine-details-button"
                    to={`/medicines/${medicine.id}`}
                >
                    View Medicine Details
                </Link>

            </div>

        </article>
    );
}

export default MedicineCard;