import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import medicines from "../data/medicines";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";

function MedicineDetails() {
    const { id } = useParams();

    const { addRecentlyViewed } = useRecentlyViewed();

    const medicine = medicines.find(
        (item) => item.id === Number(id)
    );

    useEffect(() => {
        if (medicine) {
            addRecentlyViewed({
                id: medicine.id,
                name: medicine.name,
                type: "medicine"
            });
        }
    }, [medicine, addRecentlyViewed]);

    if (!medicine) {
        return (
            <main className="details-page">
                <section className="page-header">
                    <h1>Medicine Not Found</h1>

                    <p>
                        The requested medicine could not be found.
                    </p>

                    <Link to="/medicines">
                        Back to Medicines
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="details-page">

            <section className="details-hero">
                <span>{medicine.category}</span>

                <h1>{medicine.name}</h1>

                <p>
                    Generic Name: {medicine.genericName}
                </p>

                <p>{medicine.description}</p>
            </section>

            <section className="details-grid">

                <article className="details-card">
                    <h2>Common Uses</h2>

                    <ul>
                        {medicine.commonUses.map((use, index) => (
                            <li key={index}>
                                {use}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="details-card">
                    <h2>Precautions</h2>

                    <ul>
                        {medicine.precautions.map(
                            (precaution, index) => (
                                <li key={index}>
                                    {precaution}
                                </li>
                            )
                        )}
                    </ul>
                </article>

                <article className="details-card">
                    <h2>Important Safety Information</h2>

                    <p>
                        Medicine suitability can depend on a person's
                        age, health conditions, allergies, other medicines,
                        and other individual factors.
                    </p>

                    <p>
                        Always follow the product instructions and seek
                        advice from a qualified healthcare professional
                        when appropriate.
                    </p>
                </article>

                <article className="details-card">
                    <h2>Responsible Use</h2>

                    <p>
                        Do not use MedGuide to diagnose a condition or
                        determine a personalized treatment plan.
                        This information is provided for general
                        educational purposes only.
                    </p>
                </article>

            </section>

            <div className="details-action">
                <Link to="/medicines">
                    ← Back to All Medicines
                </Link>
            </div>

        </main>
    );
}

export default MedicineDetails;