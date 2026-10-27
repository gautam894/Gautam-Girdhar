import "./symptom-care.css";
import { SymptomProvider } from "./context/SymptomContext";
import { HospitalProvider } from "./context/HospitalContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SymptomSelector from "./components/SymptomSelector";
import Results from "./components/Results";

// Drop <SymptomCare /> anywhere in your app (a page, a route, a tab).
export default function SymptomCare() {
  return (
    <div className="sc-app">
      <HospitalProvider>
        <SymptomProvider>
          <Header />
          <Hero />
          <main className="layout">
            <SymptomSelector />
            <Results />
          </main>
        </SymptomProvider>
      </HospitalProvider>
    </div>
  );
}
