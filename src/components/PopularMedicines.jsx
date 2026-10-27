import { Link } from "react-router-dom";
import medicines from "../data/medicines";

function PopularMedicines() {
    const popularMedicines = medicines.slice(0, 4);

    return (
        <section className="popular-medicines">
            <div className="section-heading">
                <span>MEDICINE INFORMATION</span>

                <h2>Popular Medicines</h2>

                <p>
                    Explore general educational information about commonly
                    referenced medicines and their uses.
                </p>
            </div>

            <div className="medicine-grid">
                {popularMedicines.map((medicine) => (
                    <article className="medicine-card" key={medicine.id}>
                        <div className="medicine-card-content">
                            <span className="medicine-category">
                                {medicine.category}
                            </span>

                            <h3>{medicine.name}</h3>

                            <p className="generic-name">
                                Generic Name: {medicine.genericName}
                            </p>

                            <p>{medicine.description}</p>

                            <Link to={`/medicines/${medicine.id}`}>
                                View Medicine Details
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            <div className="section-action">
                <Link to="/medicines">
                    View All Medicines
                </Link>
            </div>
        </section>
    );
}

export default PopularMedicines;