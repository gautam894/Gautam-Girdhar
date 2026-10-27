export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-in">
        <h1>Tell us how you feel. We'll point you to the right care.</h1>
        <p>Choose your symptoms, see what they may mean, and find a hospital with the right specialist near you.</p>
      </div>
      <svg className="ecg" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M0 70H380L410 70L430 30L460 110L490 10L520 70H760L780 58L800 70H1200" />
      </svg>
    </section>
  );
}
