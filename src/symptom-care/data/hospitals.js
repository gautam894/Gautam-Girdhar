// SAMPLE DATA – add verified phone numbers before using this for real.
// Each hospital lists the specialties it covers. Phones are shown only if filled in.
export const HOSPITALS = [
  { id: 1, name: "Civil Hospital Rajpura", city: "Rajpura", phone: "", emergency: true,
    specialties: ["General Medicine","Gastroenterology","Urology"] },
  { id: 2, name: "Government Rajindra Hospital", city: "Patiala", phone: "", emergency: true,
    specialties: ["General Medicine","Cardiology","Neurology","Pulmonology","Gastroenterology","Urology","Endocrinology"] },
  { id: 3, name: "PGIMER", city: "Chandigarh", phone: "", emergency: true,
    specialties: ["General Medicine","Cardiology","Neurology","Pulmonology","Gastroenterology","Urology","Endocrinology"] },
  { id: 4, name: "Fortis Hospital Mohali", city: "Mohali", phone: "", emergency: true,
    specialties: ["General Medicine","Cardiology","Neurology","Pulmonology","Endocrinology"] },
  { id: 5, name: "Dayanand Medical College & Hospital", city: "Ludhiana", phone: "", emergency: true,
    specialties: ["General Medicine","Cardiology","Neurology","Pulmonology","Gastroenterology","Urology","Endocrinology"] },
];
export const CITIES = ["Rajpura","Patiala","Mohali","Chandigarh","Ludhiana"];
export const EMERGENCY_NUMBERS = [
  { label: "National emergency", number: "112" },
  { label: "Ambulance", number: "108" },
];
