import { useHospitals } from "../context/HospitalContext";

export default function Header() {
  const { emergency } = useHospitals();
  return (
    <header className="top">
      <div className="brand">
        <svg viewBox="0 0 34 34" aria-hidden="true">
          <rect width="34" height="34" rx="10" fill="#4fd1c5" />
          <path d="M14 7h6v7h7v6h-7v7h-6v-7H7v-6h7z" fill="#0a3f45" />
        </svg>
        SymptomCare
      </div>
      <div className="sos" role="note">
        <span>In an emergency call</span>
        {emergency.map((e) => (
          <a key={e.number} href={`tel:${e.number}`}>{e.number} <small>{e.label}</small></a>
        ))}
      </div>
    </header>
  );
}
