import { Bot, Link2, Zap, Brain } from "lucide-react";

const stats = [
  { icon: Bot, value: "6", label: "AI Systems Built" },
  { icon: Link2, value: "5+", label: "API Integrations" },
  { icon: Zap, value: "100%", label: "Automation Focused" },
  { icon: Brain, value: "3", label: "RAG + AI Agents" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden">
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}

      {/* Top banner */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/50 text-sm mb-12">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="text-primary font-semibold tracking-wide text-xs uppercase">AI Winter Internship 2026</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-muted-foreground text-xs">Mirai School of Technology</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-muted-foreground text-xs">Jan 14 – Feb 13</span>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm mb-8">
        <span className="w-2 h-2 bg-primary rounded-full" />
        <span className="text-primary text-xs font-medium uppercase tracking-wider">AI Internship Showcase</span>
      </div>

      {/* Name */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-2">
        <span className="gradient-text">Kattamuri</span>
      </h1>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8">
        Hemanth
      </h1>

      {/* Subtitle */}
      <div className="flex items-center gap-3 mb-4 text-lg sm:text-xl">
        <span className="text-primary font-semibold">AI Automation Engineer</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-primary font-semibold">Applied AI Systems</span>
      </div>

      <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-10">
        Building Intelligent Workflows & AI Agents
      </p>

      {/* Decorative line */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* Impact stats */}
      <div className="w-full max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-8">
          Impact at a Glance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-2xl p-6 text-center transition-all hover:border-primary/30"
            >
              <s.icon size={24} className="text-primary mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
