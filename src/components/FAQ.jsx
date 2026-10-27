import { useState } from "react";

function FAQ() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "What is MedGuide?",
            answer:
                "MedGuide is an educational project that organizes general information about diseases, symptoms, medicines, precautions, and health awareness."
        },
        {
            id: 2,
            question: "Can MedGuide diagnose a disease?",
            answer:
                "No. MedGuide does not diagnose diseases. It provides general educational information and should not replace professional medical evaluation."
        },
        {
            id: 3,
            question: "Can I use MedGuide to choose a medicine?",
            answer:
                "MedGuide provides general medicine information, but medicine selection and treatment decisions should be discussed with a qualified healthcare professional."
        },
        {
            id: 4,
            question: "What information is available about medicines?",
            answer:
                "Medicine pages can include the medicine name, generic name, category, common uses, precautions, and general safety information."
        },
        {
            id: 5,
            question: "What should I do if my symptoms are severe?",
            answer:
                "Seek appropriate professional medical help. MedGuide is an educational application and is not an emergency medical service."
        }
    ];

    function toggleQuestion(id) {
        setOpenQuestion(
            openQuestion === id ? null : id
        );
    }

    return (
        <section className="faq-section">
            <div className="section-heading">
                <span>FAQ</span>

                <h2>Frequently Asked Questions</h2>

                <p>
                    Find answers to common questions about using MedGuide.
                </p>
            </div>

            <div className="faq-list">
                {questions.map((item) => (
                    <div className="faq-item" key={item.id}>
                        <button
                            className="faq-question"
                            onClick={() => toggleQuestion(item.id)}
                        >
                            <span>{item.question}</span>

                            <span>
                                {openQuestion === item.id ? "−" : "+"}
                            </span>
                        </button>

                        {openQuestion === item.id && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;