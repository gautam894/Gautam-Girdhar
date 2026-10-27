function About() {
    return (
        <main className="about-page">
            <section className="page-header">
                <span>ABOUT MEDGUIDE</span>

                <h1>Making Health Information Easier to Understand</h1>

                <p>
                    MedGuide is an educational frontend application designed
                    to help users explore general information about diseases,
                    symptoms, medicines, precautions, and health awareness.
                </p>
            </section>

            <section className="about-content">
                <div className="about-card">
                    <h2>Our Purpose</h2>

                    <p>
                        The purpose of MedGuide is to organize health-related
                        educational information in a simple and accessible
                        interface.
                    </p>
                </div>

                <div className="about-card">
                    <h2>What You Can Explore</h2>

                    <ul>
                        <li>Common health conditions</li>
                        <li>General medicine information</li>
                        <li>Common symptoms</li>
                        <li>General precautions</li>
                        <li>Health and safety information</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h2>Important Disclaimer</h2>

                    <p>
                        MedGuide is an educational project and does not
                        provide diagnosis, prescriptions, or personalized
                        medical advice. Users should consult qualified
                        healthcare professionals for medical decisions.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default About;