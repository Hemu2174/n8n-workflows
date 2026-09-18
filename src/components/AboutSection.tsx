import { Brain, Bot, BookOpen, Zap, Link2, Boxes } from "lucide-react";

const skills = [
  { icon: Brain, title: "Prompt Engineering", desc: "Crafting precise instructions to guide LLM behavior and structured outputs" },
  { icon: Bot, title: "AI Agents", desc: "Building autonomous agents with tool usage, memory, and decision-making" },
  { icon: BookOpen, title: "RAG Architecture", desc: "Retrieval-Augmented Generation combining vector search with LLMs" },
  { icon: Zap, title: "n8n Automation", desc: "Orchestrating multi-step workflows connecting APIs, databases, and AI" },
  { icon: Link2, title: "API Integration", desc: "Connecting AI models to Google, Telegram, NASA, and real-world services" },
  { icon: Boxes, title: "System Design", desc: "Building complete, production-ready working systems — not just experiments" },
];

const AboutSection = () => {
  return (
    <section id="internship" className="section-padding relative">
      {/* Timeline marker */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-border" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs text-muted-foreground">
          <span className="text-primary font-mono font-bold">0:45</span>
          <span className="uppercase tracking-wider font-semibold">Internship Structure</span>
        </div>
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-border" />
      </div>

      <div className="container mx-auto max-w-6xl text-center">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">Internship Structure</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Implementation-First <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14 text-base">
            Instead of studying theory, we focused on building complete, working AI systems connected to real-world tools and APIs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className="reveal bg-card border border-border rounded-2xl p-6 text-left transition-all hover:border-primary/30 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-base italic text-muted-foreground leading-relaxed">
            "The emphasis was on building complete, working systems — not just experiments."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
