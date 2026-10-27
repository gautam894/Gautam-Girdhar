import { Link } from "react-router-dom";

function DiseaseCard({ disease }) {
    return (
        <article className="disease-card">
            <div className="disease-card-content">
                <span className="disease-category">
                    {disease.category}
                </span>

                <h3>{disease.name}</h3>

                <p>{disease.description}</p>

                <h4>Common Symptoms</h4>

                <ul>
                    {disease.symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                    ))}
                </ul>

                <Link to={`/diseases/${disease.id}`}>
                    View Details
                </Link>
            </div>
        </article>
    );
}

export default DiseaseCard;