import { DISEASES } from "../data/diseases";

// Score = how much of the disease's symptom list you have (recall) mixed with
// how many of YOUR symptoms it explains (precision). Returns top matches.
export function matchDiseases(selected) {
  if (!selected.length) return [];
  return DISEASES.map((d) => {
    const hits = d.symptoms.filter((s) => selected.includes(s));
    if (!hits.length) return null;
    const recall = hits.length / d.symptoms.length;
    const precision = hits.length / selected.length;
    const score = Math.round((0.6 * recall + 0.4 * precision) * 100);
    return { ...d, matched: hits, score };
  })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
