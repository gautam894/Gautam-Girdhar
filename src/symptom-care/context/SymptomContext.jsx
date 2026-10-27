import { createContext, useContext, useMemo, useReducer } from "react";
import { matchDiseases } from "../utils/matcher";

const SymptomContext = createContext(null);

const initial = { selected: [], city: "Rajpura", checked: false };

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE": {
      const has = state.selected.includes(action.symptom);
      return {
        ...state, checked: false,
        selected: has ? state.selected.filter((s) => s !== action.symptom) : [...state.selected, action.symptom],
      };
    }
    case "SET_CITY": return { ...state, city: action.city };
    case "CHECK": return { ...state, checked: true };
    case "RESET": return { ...initial, city: state.city };
    default: return state;
  }
}

export function SymptomProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const results = useMemo(() => (state.checked ? matchDiseases(state.selected) : []), [state.checked, state.selected]);
  const value = useMemo(() => ({ ...state, results, dispatch }), [state, results]);
  return <SymptomContext.Provider value={value}>{children}</SymptomContext.Provider>;
}

export function useSymptoms() {
  const ctx = useContext(SymptomContext);
  if (!ctx) throw new Error("useSymptoms must be used inside SymptomProvider");
  return ctx;
}
