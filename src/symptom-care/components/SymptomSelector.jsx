import { useState } from "react";
import { SYMPTOMS } from "../data/symptoms";
import { useSymptoms } from "../context/SymptomContext";
import { useHospitals } from "../context/HospitalContext";

export default function SymptomSelector() {
  const { selected, city, dispatch } = useSymptoms();
  const { cities } = useHospitals();
  const [query, setQuery] = useState("");
  const shown = SYMPTOMS.filter((s) => s.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="panel" aria-labelledby="sel-h">
      <h2 id="sel-h">What are you feeling?</h2>
      <input className="field" type="search" placeholder="Search symptoms, e.g. fever"
        value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search symptoms" />
      <div className="chips" role="group" aria-label="Symptoms">
        {shown.map((s) => (
          <button key={s} type="button" aria-pressed={selected.includes(s)}
            className={"chip" + (selected.includes(s) ? " on" : "")}
            onClick={() => dispatch({ type: "TOGGLE", symptom: s })}>{selected.includes(s) ? "✓ " : ""}{s}</button>
        ))}
        {!shown.length && <p className="muted">No symptom matches “{query}”. Try another word.</p>}
      </div>

      <label className="row">
        <span>Your nearest city</span>
        <select className="field" value={city} onChange={(e) => dispatch({ type: "SET_CITY", city: e.target.value })}>
          {cities.map((c) => <option key={c}>{c}</option>)}
        </select>
      </label>

      <div className="actions">
        <button className="btn primary" disabled={!selected.length} onClick={() => dispatch({ type: "CHECK" })}>
          Check {selected.length ? `${selected.length} symptom${selected.length > 1 ? "s" : ""}` : "symptoms"}
        </button>
        <button className="btn" onClick={() => dispatch({ type: "RESET" })} disabled={!selected.length}>Clear all</button>
      </div>
    </section>
  );
}
