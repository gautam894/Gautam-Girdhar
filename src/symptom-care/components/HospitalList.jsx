import { useHospitals } from "../context/HospitalContext";
import { useSymptoms } from "../context/SymptomContext";

export default function HospitalList({ specialty }) {
  const { forSpecialty } = useHospitals();
  const { city } = useSymptoms();
  const list = forSpecialty(specialty, city).slice(0, 3);
  return (
    <div className="hospitals">
      <h4>Where to go for {specialty}</h4>
      <ul>
        {list.map((h) => (
          <li key={h.id}>
            <div>
              <strong>{h.name}</strong>
              <span className="muted"> {h.city}</span>
              {h.city === city && <span className="near">Nearest to you</span>}
            </div>
            <div className="links">
              {h.phone && <a href={`tel:${h.phone}`}>Call {h.phone}</a>}
              <a target="_blank" rel="noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + " " + h.city)}`}>
                Directions
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
