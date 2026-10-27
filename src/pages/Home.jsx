import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import QuickAccess from "../components/QuickAccess";
import PopularMedicines from "../components/PopularMedicines";
import FAQ from "../components/FAQ";
import RecentlyViewed from "../components/RecentlyViewed";

function Home() {
    return (
        <main>

            {/* =========================
                HERO SECTION
            ========================= */}

            <section className="hero-section">
                <div className="hero-content">

                    <span className="hero-label">
                        MEDGUIDE
                    </span>

                    <h1>
                        Understand Your Health.
                        <br />
                        Make Informed Choices.
                    </h1>

                    <p>
                        Explore reliable educational information about
                        diseases, medicines, symptoms, and general health
                        awareness in one simple platform.
                    </p>

                    <SearchBar />

                    <div className="hero-actions">

                        <Link to="/diseases">
                            Explore Diseases
                        </Link>

                        <Link to="/medicines">
                            Explore Medicines
                        </Link>

                    </div>

                </div>
            </section>


            {/* =========================
                QUICK ACCESS
            ========================= */}

            <QuickAccess />


            {/* =========================
                POPULAR MEDICINES
            ========================= */}

            <PopularMedicines />


            {/* =========================
                RECENTLY VIEWED
            ========================= */}

            <RecentlyViewed />


            {/* =========================
                FAQ
            ========================= */}

            <FAQ />

        </main>
    );
}

export default Home;