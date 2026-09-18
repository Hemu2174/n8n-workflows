const domains = [
  { emoji: "🏥", title: "Healthcare", desc: "Patient intake, physiotherapy guidance, red-flag detection" },
  { emoji: "🏢", title: "HR Systems", desc: "Policy Q&A, benefits lookup, onboarding automation" },
  { emoji: "📅", title: "Productivity", desc: "Intelligent scheduling, calendar management, email workflows" },
  { emoji: "⚙️", title: "Business Process", desc: "End-to-end automation pipelines, webhook systems, data flows" },
];

const focus = [
  { emoji: "🗺️", text: "Designing structured systems" },
  { emoji: "🔀", text: "Building intelligent workflows" },
  { emoji: "🎯", text: "Solving real-world problems using AI" },
];

const ReflectionSection = () => {
  return (
    <section id="reflection" className="section-padding relative">
      {/* Timeline marker */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-border" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs text-muted-foreground">
          <span className="text-primary font-mono font-bold">6:45</span>
          <span className="uppercase tracking-wider font-semibold">Reflection & Career Impact</span>
        </div>
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-border" />
      </div>

      <div className="container mx-auto max-w-6xl text-center">
        <div className="reveal mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">Looking Forward</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Reflection & Career <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            This internship gave me clarity on how artificial intelligence applies across industries — and fundamentally changed my approach to building with AI.
          </p>
        </div>

        {/* Domains */}
        <div className="reveal mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">
            AI Application Domains Explored
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domains.map((d) => (
              <div
                key={d.title}
                className="bg-card border border-border rounded-2xl p-6 text-left transition-all hover:border-primary/30"
              >
                <span className="text-3xl">{d.emoji}</span>
                <h3 className="font-semibold mt-3 mb-1">{d.title}</h3>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">My Current Focus</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {focus.map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-3 text-sm"
              >
                <span>{f.emoji}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Excited to continue building AI-driven automation systems and applying these learnings in future academic and professional opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;
