const topics = [
  "Adjectives and adverbs",
  "Easily confused words",
  "Nouns, pronouns and determiners",
  "Prepositions and particles",
  "Using English",
  "Verbs",
  "Words, sentences and clauses",
  "Common mistakes in English",
];

export default function GrammarGuidePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans px-6">
      <h1 className="text-4xl font-bold mb-6">Grammar Guide</h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        A short guide to English grammar for Spanish speakers, with clear
        explanations and examples. Use it to review what you learn in class or
        to study on your own.
      </p>

      <h2 className="text-2xl font-bold mb-4">Topics</h2>
      <ul className="text-lg list-disc list-inside mb-8">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </section>
  );
}
