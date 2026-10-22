export default function AboutJosePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans px-6">
      <h1 className="text-4xl font-bold mb-6">About Jose</h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        Jose teaches English online and in Peru.
      </p>
      <p className="text-lg max-w-2xl text-center mb-8">
        Born in Lima, Peru and raised in Cleveland, Ohio, Jose brings a unique
        bicultural perspective to his teaching. His journey has been shaped by
        both South American roots and years of living in the
        United States.
      </p>

      <p className="text-lg max-w-2xl text-center mb-8">
        Jose taught at{" "}
        <a
          href="https://esperanzainc.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          Esperanza
        </a>{" "}
        in Cleveland, Ohio, where he supported students in developing their
        English skills and achieving academic success, including professional
        communication and English for the workplace. That experience deepened his
        commitment to education and inspired his current work teaching English
        online and in Peru, where he continues to help students build the English
        they need at work.
      </p>

      <p className="text-lg max-w-2xl text-center mb-8">
        Today, Jose teaches English in Peru, in person and online. He works with
        adult learners one on one and in groups. As a native English speaker who also speaks Spanish, he
        understands the challenges Spanish speakers face and tailors each class
        to the student&apos;s goals, whether that is work, travel or everyday
        conversation.
      </p>

      <p className="text-lg max-w-2xl text-center mb-8">
        Jose is TEFL certified (Teaching English as a Foreign Language) through{" "}
        <a
          href="https://maximonivel.com/tefl-tesol/peru/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          Maximo Nivel
        </a>
        , an intercultural institute with locations in Peru, Guatemala and Costa
        Rica. Its TEFL course is a 4-week, 150-hour program that includes
        practical teaching experience.
      </p>

      <a
        href="/contact"
        className="px-6 py-3 bg-foreground text-background rounded-lg shadow hover:opacity-90 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}
