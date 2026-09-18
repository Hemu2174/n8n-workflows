import workflowGalaxy from "@/assets/workflow-galaxy.png";
import workflowHrRag from "@/assets/workflow-hr-rag.png";
import workflowPhysiobot from "@/assets/workflow-physiobot.png";
import workflowAppointment from "@/assets/workflow-appointment.png";
import workflowCalendar from "@/assets/workflow-calendar.png";
import workflowEmail from "@/assets/workflow-email.png";

const projects = [
  {
    emoji: "🌌",
    title: "Galaxy of Space",
    subtitle: "NASA Automation Workflow",
    desc: "Automated daily space photo pipeline using NASA's Astronomy Picture of the Day API. Subscribers receive daily cosmic imagery via email — fully autonomous, zero manual intervention.",
    tags: ["NASA API", "Schedule Trigger", "Google Sheets", "Gmail"],
    platform: "n8n",
    image: workflowGalaxy,
  },
  {
    emoji: "💼",
    title: "HR RAG Assistant",
    subtitle: "Policy & Benefits Bot",
    desc: "Retrieval-Augmented Generation assistant that answers HR policy queries using Pinecone vector search + OpenAI. Grounded responses from official company documents — no hallucinations.",
    tags: ["RAG", "Pinecone", "OpenAI", "Google Drive"],
    platform: "n8n",
    image: workflowHrRag,
  },
  {
    emoji: "🏥",
    title: "DR Marvel PhysioBot",
    subtitle: "Telegram AI Healthcare Assistant",
    desc: "AI-powered Telegram bot collecting patient details, providing physiotherapy guidance, detecting red-flag symptoms, and auto-booking appointments. Powered by Google Gemini.",
    tags: ["Telegram", "Google Gemini", "Healthcare AI", "n8n"],
    platform: "n8n",
    image: workflowPhysiobot,
  },
  {
    emoji: "📅",
    title: "Dr. Strange Appointment AI",
    subtitle: "Physio Scheduling System",
    desc: "Conversational AI scheduling agent enforcing working hours, lunch breaks, and buffer times via Google Calendar. Sends confirmation emails to both patient and doctor automatically.",
    tags: ["Google Calendar", "OpenAI", "Gmail", "Scheduling"],
    platform: "n8n",
    image: workflowAppointment,
  },
  {
    emoji: "⚡",
    title: "Calendar AI Agent",
    subtitle: "Chat-Based Scheduling Automation",
    desc: "Chat-driven calendar agent that blocks time, sends confirmation emails, and logs events automatically. Built with OpenAI + Simple Memory for context-aware conversations.",
    tags: ["OpenAI", "Simple Memory", "Google Sheets", "Gmail"],
    platform: "n8n",
    image: workflowCalendar,
  },
  {
    emoji: "📧",
    title: "Webhook AI Email Pipeline",
    subtitle: "Markdown to HTML Automation",
    desc: "Webhook-triggered automation converting raw Markdown content to polished HTML emails via Google Gemini AI Agent — appends to Sheets and delivers via Gmail instantly.",
    tags: ["Webhook", "Gemini AI", "Markdown→HTML", "Gmail"],
    platform: "n8n",
    image: workflowEmail,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Timeline marker */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-border" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs text-muted-foreground">
          <span className="text-primary font-mono font-bold">3:00</span>
          <span className="uppercase tracking-wider font-semibold">Project Deep Dive</span>
        </div>
        <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-border" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="reveal text-center mb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
            Built During Internship · Jan–Feb 2026
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Systems <span className="gradient-text">I've Built</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-12">
            Mirai School of Technology · n8n Automation Platform
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="reveal bg-card border border-border rounded-2xl overflow-hidden transition-all hover:border-primary/30"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="p-4 md:p-6">
                  <img
                    src={p.image}
                    alt={`${p.title} workflow screenshot`}
                    className="w-full h-auto rounded-xl border border-border"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{p.platform}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
