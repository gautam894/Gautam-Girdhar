import { createContext, useCallback, useContext, useMemo } from "react";
import { HOSPITALS, CITIES, EMERGENCY_NUMBERS } from "../data/hospitals";

const HospitalContext = createContext(null);

export function HospitalProvider({ children }) {
  // Hospitals offering the specialty; the chosen city comes first.
  const forSpecialty = useCallback((specialty, city) =>
    HOSPITALS.filter((h) => h.specialties.includes(specialty))
      .sort((a, b) => (b.city === city) - (a.city === city)), []);
  const value = useMemo(() => ({ cities: CITIES, emergency: EMERGENCY_NUMBERS, forSpecialty }), [forSpecialty]);
  return <HospitalContext.Provider value={value}>{children}</HospitalContext.Provider>;
}

export function useHospitals() {
  const ctx = useContext(HospitalContext);
  if (!ctx) throw new Error("useHospitals must be used inside HospitalProvider");
  return ctx;
}
