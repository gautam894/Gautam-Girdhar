import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Diseases from "./pages/Diseases";
import Medicines from "./pages/Medicines";
import DiseaseDetails from "./pages/DiseaseDetails";
import MedicineDetails from "./pages/MedicineDetails";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Safety from "./pages/Safety";
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";
import SymptomCare from "./symptom-care/SymptomCare";

import { FavoritesProvider } from "./context/FavoritesContext";

import "./App.css";

function App() {
    return (
       <FavoritesProvider>
    <RecentlyViewedProvider>
        <BrowserRouter>

                <Navbar />

                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
  <Route
    path="/dashboard"
    element={<Dashboard />}
/>
                    <Route
                        path="/symptom-checker"
                        element={<SymptomCare />}
                    />

                    <Route
                        path="/diseases"
                        element={<Diseases />}
                    />

                    <Route
                        path="/diseases/:id"
                        element={<DiseaseDetails />}
                    />
 <Route
    path="/search"
    element={<SearchResults />}
/>
                    <Route
                        path="/medicines"
                        element={<Medicines />}
                    />

                    <Route
                        path="/medicines/:id"
                        element={<MedicineDetails />}
                    />

                    <Route
                        path="/categories"
                        element={<Categories />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

<Route
    path="/favorites"
    element={<Favorites />}
/>
                    <Route
                        path="/safety"
                        element={<Safety />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>


                <Footer />

                   </BrowserRouter>
    </RecentlyViewedProvider>
</FavoritesProvider>
    );
}

export default App;