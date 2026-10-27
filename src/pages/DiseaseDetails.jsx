import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import diseases from "../data/diseases";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";

function DiseaseDetails() {
    const { id } = useParams();

    const { addRecentlyViewed } = useRecentlyViewed();

    const disease = diseases.find(
        (item) => item.id === Number(id)
    );

    useEffect(() => {
        if (disease) {
            addRecentlyViewed({
                id: disease.id,
                name: disease.name,
                type: "disease"
            });
        }
    }, [disease, addRecentlyViewed]);

    if (!disease) {
        return (
            <main className="details-page">

                <section className="page-header">

                    <span>MEDGUIDE</span>

                    <h1>
                        Disease Not Found
                    </h1>

                    <p>
                        The requested disease could not be found.
                        Please return to the disease collection.
                    </p>

                    <Link to="/diseases">
                        Back to Diseases
                    </Link>

                </section>

            </main>
        );
    }

    return (
        <main className="details-page">

            {/* =========================
                DISEASE HEADER
            ========================= */}

            <section className="details-hero">

                <span>
                    {disease.category}
                </span>

                <h1>
                    {disease.name}
                </h1>

                <p>
                    {disease.description}
                </p>

            </section>


            {/* =========================
                DETAILS
            ========================= */}

            <section className="details-grid">

                {/* Symptoms */}

                <article className="details-card">

                    <h2>
                        Common Symptoms
                    </h2>

                    <ul>
                        {disease.symptoms.map(
                            (symptom, index) => (
                                <li key={index}>
                                    {symptom}
                                </li>
                            )
                        )}
                    </ul>

                </article>


                {/* General Information */}

                <article className="details-card">

                    <h2>
                        General Information
                    </h2>

                    <p>
                        Symptoms and their severity can vary
                        between individuals. The information
                        provided by MedGuide is intended for
                        general educational purposes.
                    </p>

                </article>


                {/* Professional Help */}

                <article className="details-card">

                    <h2>
                        When to Seek Professional Help
                    </h2>

                    <p>
                        If symptoms are severe, persistent,
                        unusual, or getting worse, consult a
                        qualified healthcare professional.
                    </p>

                </article>


                {/* Safety */}

                <article className="details-card">

                    <h2>
                        Important Safety Note
                    </h2>

                    <p>
                        MedGuide does not diagnose diseases
                        or provide personalized treatment
                        recommendations.
                    </p>

                    <p>
                        Do not use this information as a
                        substitute for professional medical
                        advice.
                    </p>

                </article>

            </section>


            {/* =========================
                NAVIGATION
            ========================= */}

            <div className="details-action">

                <Link to="/diseases">
                    ← Back to All Diseases
                </Link>

            </div>

        </main>
    );
}

export default DiseaseDetails;

