import { Link } from "react-router-dom";

import { useFavorites } from "../context/FavoritesContext";

import medicines from "../data/medicines";

import MedicineCard from "../components/MedicineCard";

function Favorites() {
    const {
        favorites,
        clearFavorites
    } = useFavorites();

    const favoriteMedicines = medicines.filter(
        (medicine) =>
            favorites.includes(medicine.id)
    );

    return (
        <main className="favorites-page">

            <section className="page-header">

                <span>MY COLLECTION</span>

                <h1>Saved Medicines</h1>

                <p>
                    View the medicines you have saved for
                    quick and easy access.
                </p>

            </section>

            <section className="medicines-section">

                {favoriteMedicines.length > 0 ? (
                    <>

                        <div className="favorites-actions">

                            <span>
                                {favoriteMedicines.length} saved medicine
                                {favoriteMedicines.length !== 1
                                    ? "s"
                                    : ""}
                            </span>

                            <button
                                type="button"
                                onClick={clearFavorites}
                            >
                                Clear All Favorites
                            </button>

                        </div>

                        <div className="medicine-grid">

                            {favoriteMedicines.map(
                                (medicine) => (
                                    <MedicineCard
                                        key={medicine.id}
                                        medicine={medicine}
                                    />
                                )
                            )}

                        </div>

                    </>
                ) : (
                    <div className="no-results">

                        <h2>
                            No Saved Medicines
                        </h2>

                        <p>
                            You have not saved any medicines yet.
                            Browse the medicine collection and use
                            the ☆ button to save medicines.
                        </p>

                        <Link to="/medicines">
                            Browse Medicines
                        </Link>

                    </div>
                )}

            </section>

        </main>
    );
}

export default Favorites;