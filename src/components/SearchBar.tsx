import { Search, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  compact?: boolean;
}

const suggestions = [
  { label: "Dermatologist", icon: "✨" },
  { label: "Cardiologist", icon: "❤️" },
  { label: "Dentist", icon: "🦷" },
  { label: "General Physician", icon: "🩺" },
  { label: "Neurologist", icon: "🧠" },
];

export default function SearchBar({ compact }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);

  const handleSuggestionClick = (label: string) => {
    setSearchValue(label);
    setActiveSuggestion(label);
    setTimeout(() => setActiveSuggestion(null), 1000);
  };

  return (
    <div className="w-full">
      <div 
        className={`p-1.5 bg-white/70 dark:bg-black/40 backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col sm:flex-row items-center w-full transition-all duration-500 hover:shadow-2xl hover:bg-white/80 dark:hover:bg-black/50 hover:border-primary/30 group focus-within:shadow-[0_15px_50px_-15px_rgba(var(--color-primary),0.3)] focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-card ${compact ? "max-w-2xl" : "max-w-4xl mx-auto"}`}
      >
        
        {/* Primary Search Input */}
        <div className="relative flex-1 w-full flex flex-row items-center px-4">
          <Search size={compact ? 18 : 22} className="text-muted-foreground transition-colors duration-300 group-focus-within:text-primary" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search doctors, specialties, or symptoms..."
            className={`w-full bg-transparent border-none outline-none px-4 text-foreground placeholder:text-muted-foreground/60 font-medium ${compact ? "py-2.5 text-sm" : "py-4 text-base"}`}
          />
        </div>

        {/* Elegant Divider */}
        <div className="hidden sm:block w-[1px] h-10 bg-border/60 dark:bg-white/10 mx-1" />

        {/* Location Input */}
        <div className="relative sm:w-64 w-full flex flex-row items-center px-4 border-t border-border/30 sm:border-t-0">
          <MapPin size={compact ? 18 : 20} className="text-muted-foreground transition-colors duration-300 group-focus-within:text-primary" />
          <input
            type="text"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            placeholder="City or zip code"
            className={`w-full bg-transparent border-none outline-none px-3 text-foreground placeholder:text-muted-foreground/60 font-medium ${compact ? "py-2.5 text-sm" : "py-4 text-base"}`}
          />
        </div>

        {/* Premium Search Button */}
        <button className={`w-full sm:w-auto bg-primary hover:bg-teal-dark text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 shrink-0 flex items-center justify-center gap-2 mt-2 sm:mt-0 group/btn ${compact ? "py-3 px-6 text-sm" : "py-4 px-10 text-base"}`}>
          <span className="tracking-wide">{compact ? "Search" : "Book Appointment"}</span>
          <ChevronRight size={compact ? 16 : 20} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Suggestion Chips */}
      <AnimatePresence>
        {!compact && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-4"
          >
            <span className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mr-2">Quick Search:</span>
            {suggestions.map((s) => (
              <button
                key={s.label}
                onClick={() => handleSuggestionClick(s.label)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 flex items-center gap-2 ${
                  searchValue === s.label
                    ? "bg-primary/10 border-primary text-primary shadow-sm"
                    : "bg-white/40 dark:bg-white/5 border-white/60 dark:border-white/10 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-white/80"
                }`}
              >
                <span>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
