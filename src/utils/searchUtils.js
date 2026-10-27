export function searchDiseases(diseases, searchTerm) {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
        return [];
    }

    return diseases.filter((disease) => {
        return (
            disease.name.toLowerCase().includes(term) ||
            disease.category.toLowerCase().includes(term) ||
            disease.symptoms.some((symptom) =>
                symptom.toLowerCase().includes(term)
            )
        );
    });
}

export function searchMedicines(medicines, searchTerm) {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
        return [];
    }

    return medicines.filter((medicine) => {
        return (
            medicine.name.toLowerCase().includes(term) ||
            medicine.genericName.toLowerCase().includes(term) ||
            medicine.category.toLowerCase().includes(term) ||
            medicine.commonUses.some((use) =>
                use.toLowerCase().includes(term)
            )
        );
    });
}