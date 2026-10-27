# Merging SymptomCare into another React project

## 1. Copy
Copy this whole folder into your project's `src` folder, e.g. `src/symptom-care/`.

## 2. Use it
    import SymptomCare from "./symptom-care/SymptomCare";

    function App() {
      return <SymptomCare />;
    }

With React Router, use it as a page:
    <Route path="/symptom-checker" element={<SymptomCare />} />

## 3. Requirements
- React 17+ (tested design: React 18). No extra npm packages needed.
- Works with Vite, Create React App or Next.js (in Next.js add "use client" at the top of SymptomCare.jsx
  and import it from a client page).

## What is inside
- `SymptomCare.jsx`          entry component (wraps both context providers)
- `context/`                 SymptomContext (useReducer) and HospitalContext
- `components/`              Header, Hero, SymptomSelector, Results, HospitalList
- `data/`                    symptoms, diseases, hospitals (edit to extend)
- `utils/matcher.js`         scoring logic
- `symptom-care.css`         all styles, scoped under `.sc-app` so they will not change your other pages
- `standalone-preview.html`  open in a browser to see the finished look (needs internet)

## Notes
- If your site already has its own header, delete `<Header />` in SymptomCare.jsx (the emergency numbers
  live in it, so keep them somewhere visible).
- Hospital phone numbers in `data/hospitals.js` are blank sample data. Add verified numbers.
- Colors are CSS variables at the top of `symptom-care.css` (--teal, --hero, ...). Change them to match your brand.
- Guidance only, not a medical diagnosis.
