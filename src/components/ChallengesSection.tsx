const challenges = [
  { emoji: "🔧", title: "Debugging multi-step workflows", desc: "Tracing failures across interconnected nodes and API calls" },
  { emoji: "🌊", title: "Managing data flow between nodes", desc: "Ensuring correct data structures pass seamlessly through each step" },
  { emoji: "📐", title: "Structured vs unstructured AI outputs", desc: "Parsing and validating LLM responses for downstream automation" },
  { emoji: "✍️", title: "Designing effective prompts", desc: "Iterating prompts to achieve consistent, accurate AI behavior" },
  { emoji: "🧩", title: "Memory in AI agents", desc: "Understanding context windows, short-term, and long-term agent memory" },
];

const technicalSkills = [
  "Prompt Engineering", "RAG Architecture", "Vector Embeddings", "AI Agents with Memory",
  "API Integration", "Workflow Automation", "Event-Driven Design", "Webhook Systems",
];

const problemSkills = [
  "Logical Thinking", "Problem Decomposition", "Scalable System Design", "Pipeline Debugging",
];

const ChallengesSection = () => {
  return (
    <section id="challenges" className="section-padding relative">
      {/* Timeline marker */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-border" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs text-muted-foreground">
          <span className="text-primary font-mono font-bold">6:00</span>
          <span className="uppercase tracking-wider font-semibold">Challenges & Learnings</span>
        </div>
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-border" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">Real-World Growth</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Challenges & Key <span className="gradient-text">Learnings</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Challenges */}
          <div className="reveal">
            <h3 className="text-xl font-bold mb-6">Challenges Faced</h3>
            <div className="space-y-4">
              {challenges.map((c, i) => (
                <div
                  key={c.title}
                  className="bg-card border border-border rounded-xl p-5 transition-all hover:border-primary/30"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{c.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{c.title}</h4>
                      <p className="text-xs text-muted-foreground">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Realization */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="bg-card border border-border rounded-2xl p-8 mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">Major Realization</p>
              <p className="text-lg font-light text-muted-foreground mb-2">AI alone is not powerful.</p>
              <p className="text-lg font-bold text-primary">AI combined with structured systems and automation is powerful.</p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Shifted mindset from "using AI tools" → "building AI-powered systems"
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Technical Skills Gained</p>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((s) => (
                  <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Problem-Solving Skills</p>
              <div className="flex flex-wrap gap-2">
                {problemSkills.map((s) => (
                  <span key={s} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full font-medium">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
