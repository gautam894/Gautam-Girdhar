import { Link } from "react-router-dom";

import diseases from "../data/diseases";
import medicines from "../data/medicines";
import categories from "../data/categories";

import { useFavorites } from "../context/FavoritesContext";

function Dashboard() {
    const { favorites } = useFavorites();

    const categoryStats = categories.map((category) => {
        const count = medicines.filter(
            (medicine) =>
                medicine.category.toLowerCase() ===
                category.name.toLowerCase()
        ).length;

        return {
            name: category.name,
            count
        };
    });

    return (
        <main className="dashboard-page">

            {/* =========================
                DASHBOARD HEADER
            ========================= */}

            <section className="page-header">

                <span>MEDGUIDE</span>

                <h1>
                    Health Information Dashboard
                </h1>

                <p>
                    Explore MedGuide's collection of diseases,
                    medicines, categories, and saved information.
                </p>

            </section>


            {/* =========================
                MAIN STATISTICS
            ========================= */}

            <section className="dashboard-section">

                <div className="dashboard-grid">

                    {/* Diseases */}

                    <div className="dashboard-card">

                        <span className="dashboard-icon">
                            🩺
                        </span>

                        <h2>
                            {diseases.length}
                        </h2>

                        <p>
                            Diseases
                        </p>

                        <Link to="/diseases">
                            Explore Diseases →
                        </Link>

                    </div>


                    {/* Medicines */}

                    <div className="dashboard-card">

                        <span className="dashboard-icon">
                            💊
                        </span>

                        <h2>
                            {medicines.length}
                        </h2>

                        <p>
                            Medicines
                        </p>

                        <Link to="/medicines">
                            Explore Medicines →
                        </Link>

                    </div>


                    {/* Categories */}

                    <div className="dashboard-card">

                        <span className="dashboard-icon">
                            📚
                        </span>

                        <h2>
                            {categories.length}
                        </h2>

                        <p>
                            Categories
                        </p>

                        <Link to="/categories">
                            Explore Categories →
                        </Link>

                    </div>


                    {/* Favorites */}

                    <div className="dashboard-card">

                        <span className="dashboard-icon">
                            ⭐
                        </span>

                        <h2>
                            {favorites.length}
                        </h2>

                        <p>
                            Saved Medicines
                        </p>

                        <Link to="/favorites">
                            View Favorites →
                        </Link>

                    </div>

                </div>


                {/* =========================
                    MEDICINE STATISTICS
                ========================= */}

                <section className="statistics-section">

                    <div className="section-heading">

                        <span>
                            DATA OVERVIEW
                        </span>

                        <h2>
                            Medicine by Category
                        </h2>

                        <p>
                            Distribution of medicines across
                            different categories.
                        </p>

                    </div>


                    <div className="statistics-list">

                        {categoryStats.map((category) => (

                            <div
                                className="statistic-item"
                                key={category.name}
                            >

                                <div className="statistic-info">

                                    <strong>
                                        {category.name}
                                    </strong>

                                    <span>
                                        {category.count} medicine
                                        {category.count !== 1
                                            ? "s"
                                            : ""}
                                    </span>

                                </div>


                                <div className="statistic-bar">

                                    <div
                                        className="statistic-fill"
                                        style={{
                                            width: `${
                                                medicines.length > 0
                                                    ? (category.count /
                                                          medicines.length) *
                                                      100
                                                    : 0
                                            }%`
                                        }}
                                    ></div>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>


                {/* =========================
                    QUICK ACTIONS
                ========================= */}

                <section className="dashboard-actions">

                    <div className="section-heading">

                        <span>
                            QUICK ACCESS
                        </span>

                        <h2>
                            Explore MedGuide
                        </h2>

                        <p>
                            Quickly access the main areas of
                            the MedGuide platform.
                        </p>

                    </div>


                    <div className="dashboard-actions-grid">


                        {/* Diseases */}

                        <Link to="/diseases">

                            <span>
                                🩺
                            </span>

                            <h3>
                                Browse Diseases
                            </h3>

                            <p>
                                Explore conditions and common
                                symptoms.
                            </p>

                        </Link>


                        {/* Medicines */}

                        <Link to="/medicines">

                            <span>
                                💊
                            </span>

                            <h3>
                                Browse Medicines
                            </h3>

                            <p>
                                Explore medicines and their
                                information.
                            </p>

                        </Link>


                        {/* Categories */}

                        <Link to="/categories">

                            <span>
                                📚
                            </span>

                            <h3>
                                Medicine Categories
                            </h3>

                            <p>
                                Browse medicines by category.
                            </p>

                        </Link>


                        {/* Favorites */}

                        <Link to="/favorites">

                            <span>
                                ⭐
                            </span>

                            <h3>
                                Saved Medicines
                            </h3>

                            <p>
                                View your bookmarked medicines.
                            </p>

                        </Link>

                    </div>

                </section>

            </section>

        </main>
    );
}

export default Dashboard;