import { useState } from "react";
import { useSymptoms } from "../context/SymptomContext";
import HospitalList from "./HospitalList";

export default function Results() {
  const { checked, results, selected } = useSymptoms();
  const [open, setOpen] = useState(0);

  if (!checked) {
    return <section className="panel empty"><h2>Your results will show here</h2>
      <p className="muted">Pick the symptoms you have, then press Check symptoms.</p></section>;
  }
  if (!results.length) {
    return <section className="panel empty"><h2>No match found</h2>
      <p className="muted">These symptoms don't match anything in our list. Please talk to a doctor.</p></section>;
  }
  const urgent = results.some((r) => r.severity === "serious");

  return (
    <section className="panel" aria-live="polite">
      <h2>Possible conditions</h2>
      {urgent && <p className="alert">One or more matches can be serious. Do not wait if symptoms are severe or getting worse.</p>}
      {results.map((r, i) => (
        <article key={r.name} className={`card ${r.severity}`}>
          <button className="card-head" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="name">{r.name}</span>
            <span className="tag">{r.severity}</span>
            <span className="score">{r.score}% match</span>
          </button>
          <div className="bar"><i style={{ width: r.score + "%" }} /></div>
          {open === i && (
            <div className="detail">
              <p><strong>Matches your:</strong> {r.matched.join(", ")}</p>
              <p>{r.advice}</p>
              <HospitalList specialty={r.specialty} />
            </div>
          )}
        </article>
      ))}
      <p className="muted small">Based on {selected.length} selected symptom(s). This is guidance, not a diagnosis. A doctor must confirm any condition.</p>
    </section>
  );
}
