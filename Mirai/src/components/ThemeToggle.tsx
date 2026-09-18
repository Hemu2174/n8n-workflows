import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border text-foreground text-sm transition-all hover:border-primary/50"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun size={16} className="text-primary" />
          <span className="hidden sm:inline text-xs text-muted-foreground">Light</span>
        </>
      ) : (
        <>
          <Moon size={16} className="text-primary" />
          <span className="hidden sm:inline text-xs text-muted-foreground">Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
