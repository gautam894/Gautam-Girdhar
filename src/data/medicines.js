const medicines = [
    {
        id: 1,
        name: "Paracetamol",
        genericName: "Paracetamol",
        category: "Pain Relief",
        description:
            "A commonly used medicine for temporary relief of pain and reduction of fever.",
        commonUses: [
            "Fever",
            "Headache",
            "Mild to moderate pain"
        ],
        precautions: [
            "Follow the dosage instructions on the product label or from a healthcare professional.",
            "Avoid taking multiple products containing paracetamol at the same time.",
            "People with certain liver conditions should seek professional advice before use."
        ]
    },

    {
        id: 2,
        name: "Cetirizine",
        genericName: "Cetirizine Hydrochloride",
        category: "Allergy Relief",
        description:
            "An antihistamine commonly used to help relieve symptoms associated with allergies.",
        commonUses: [
            "Sneezing",
            "Runny nose",
            "Itchy eyes",
            "Allergic symptoms"
        ],
        precautions: [
            "May cause drowsiness in some people.",
            "Avoid activities requiring alertness if you feel sleepy.",
            "Ask a healthcare professional if you are taking other medicines."
        ]
    },

    {
        id: 3,
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        category: "Pain Relief",
        description:
            "A non-steroidal anti-inflammatory medicine commonly used for pain, inflammation and fever.",
        commonUses: [
            "Pain",
            "Inflammation",
            "Fever"
        ],
        precautions: [
            "Take only as directed.",
            "People with certain stomach, kidney or heart conditions should seek professional advice.",
            "Do not combine medicines containing similar ingredients without professional guidance."
        ]
    },

    {
        id: 4,
        name: "Loratadine",
        genericName: "Loratadine",
        category: "Allergy Relief",
        description:
            "An antihistamine used to help relieve symptoms associated with allergic conditions.",
        commonUses: [
            "Sneezing",
            "Runny nose",
            "Itchy nose",
            "Allergy symptoms"
        ],
        precautions: [
            "Follow the recommended instructions.",
            "Tell a healthcare professional about other medicines you use.",
            "Seek advice if symptoms persist or become severe."
        ]
    },

    {
        id: 5,
        name: "Antacid",
        genericName: "Various active ingredients",
        category: "Digestive Health",
        description:
            "Antacid products can help neutralize stomach acid and provide temporary relief from heartburn or indigestion.",
        commonUses: [
            "Heartburn",
            "Acid indigestion",
            "Stomach acid discomfort"
        ],
        precautions: [
            "Follow the instructions on the specific product.",
            "Some antacids can affect how other medicines are absorbed.",
            "Persistent digestive symptoms should be discussed with a healthcare professional."
        ]
    },

    {
        id: 6,
        name: "Omeprazole",
        genericName: "Omeprazole",
        category: "Digestive Health",
        description:
            "A medicine that reduces the amount of acid produced in the stomach.",
        commonUses: [
            "Heartburn",
            "Acid reflux",
            "Indigestion"
        ],
        precautions: [
            "Use according to the product instructions or professional advice.",
            "Tell a healthcare professional about other medicines you take.",
            "Persistent or severe digestive symptoms require professional evaluation."
        ]
    },

    {
        id: 7,
        name: "ORS",
        genericName: "Oral Rehydration Salts",
        category: "Hydration",
        description:
            "An oral rehydration solution used to help replace fluids and electrolytes lost from the body.",
        commonUses: [
            "Dehydration",
            "Fluid loss",
            "Electrolyte replacement"
        ],
        precautions: [
            "Prepare the solution according to the package instructions.",
            "Use clean and safe drinking water.",
            "Severe dehydration requires prompt medical attention."
        ]
    },

    {
        id: 8,
        name: "Amoxicillin",
        genericName: "Amoxicillin",
        category: "Antibiotics",
        description:
            "An antibiotic used to treat certain bacterial infections when prescribed by a healthcare professional.",
        commonUses: [
            "Certain bacterial infections",
            "Respiratory infections",
            "Some ear infections"
        ],
        precautions: [
            "Use only when prescribed or recommended by a qualified healthcare professional.",
            "Complete the prescribed course unless advised otherwise.",
            "People with certain penicillin allergies should inform their healthcare professional."
        ]
    },

    {
        id: 9,
        name: "Azithromycin",
        genericName: "Azithromycin",
        category: "Antibiotics",
        description:
            "An antibiotic used to treat certain bacterial infections under professional guidance.",
        commonUses: [
            "Certain respiratory infections",
            "Some bacterial infections",
            "Certain skin infections"
        ],
        precautions: [
            "Use only as prescribed by a healthcare professional.",
            "Do not use antibiotics for viral infections unless specifically advised.",
            "Inform your healthcare professional about other medicines you take."
        ]
    },

    {
        id: 10,
        name: "Calcium Supplement",
        genericName: "Calcium",
        category: "Nutritional Support",
        description:
            "A calcium supplement used to help provide calcium when dietary intake may be insufficient.",
        commonUses: [
            "Calcium supplementation",
            "Supporting bone health",
            "Dietary calcium support"
        ],
        precautions: [
            "Follow the recommended serving or dosage.",
            "Excessive intake may cause unwanted effects.",
            "Ask a healthcare professional if you take other medicines or supplements."
        ]
    },

    {
        id: 11,
        name: "Vitamin D",
        genericName: "Cholecalciferol",
        category: "Nutritional Support",
        description:
            "A vitamin supplement used to provide vitamin D when supplementation is appropriate.",
        commonUses: [
            "Vitamin D supplementation",
            "Supporting bone health",
            "Supporting normal calcium absorption"
        ],
        precautions: [
            "Use according to the recommended instructions.",
            "Avoid excessive intake.",
            "Ask a healthcare professional about appropriate supplementation."
        ]
    },

    {
        id: 12,
        name: "Hydrocortisone Cream",
        genericName: "Hydrocortisone",
        category: "Skin Care",
        description:
            "A topical corticosteroid used for temporary relief of certain mild skin inflammation and irritation.",
        commonUses: [
            "Mild skin irritation",
            "Inflammation",
            "Itching associated with certain skin conditions"
        ],
        precautions: [
            "Use only as directed on the product label or by a healthcare professional.",
            "Avoid prolonged use without professional advice.",
            "Avoid applying to areas where the product is not recommended."
        ]
    },

    {
        id: 13,
        name: "Calamine Lotion",
        genericName: "Calamine",
        category: "Skin Care",
        description:
            "A topical preparation commonly used to soothe minor skin irritation and itching.",
        commonUses: [
            "Minor skin irritation",
            "Itching",
            "Minor rashes"
        ],
        precautions: [
            "For external use only.",
            "Avoid contact with the eyes.",
            "Stop use and seek advice if irritation becomes severe."
        ]
    },

    {
        id: 14,
        name: "Dextromethorphan",
        genericName: "Dextromethorphan",
        category: "Cold & Cough",
        description:
            "A cough suppressant used in some products for temporary relief of certain types of cough.",
        commonUses: [
            "Temporary cough relief",
            "Dry cough"
        ],
        precautions: [
            "Follow the instructions on the specific product.",
            "Check combination products carefully to avoid taking duplicate ingredients.",
            "Ask a healthcare professional if the cough persists or worsens."
        ]
    },

    {
        id: 15,
        name: "Saline Nasal Spray",
        genericName: "Sodium Chloride Solution",
        category: "Cold & Cough",
        description:
            "A saline nasal preparation used to moisturize the nasal passages and help clear mucus.",
        commonUses: [
            "Nasal dryness",
            "Nasal congestion",
            "Mucus clearance"
        ],
        precautions: [
            "Use according to the product instructions.",
            "Keep the applicator clean.",
            "Seek professional advice if symptoms persist or become severe."
        ]
    }
];

export default medicines;