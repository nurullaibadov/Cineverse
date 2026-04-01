import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FilmGrid } from "@/components/FilmGrid";
import { films, allGenres } from "@/lib/filmData";
import { Film, Sparkles, Flame, Skull, Heart, Compass, Clock, Laugh, Wand2 } from "lucide-react";

const genreIcons: Record<string, React.ElementType> = {
  "Sci-Fi": Sparkles, "Thriller": Flame, "Action": Flame, "Drama": Heart,
  "Romance": Heart, "Adventure": Compass, "Mystery": Compass, "Noir": Skull,
  "Horror": Skull, "History": Clock, "Animation": Wand2, "Fantasy": Wand2,
  "Psychological": Skull, "Comedy": Laugh,
};

export default function GenresPage() {
  const { t } = useTranslation();
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filtered = selectedGenre ? films.filter((f) => f.genre.includes(selectedGenre)) : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-8 px-4 md:px-12 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-2">{t("nav.genres")}</h1>
          <p className="text-muted-foreground mb-8">Browse by category and find your next obsession.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
            {allGenres.map((genre, i) => {
              const Icon = genreIcons[genre] || Film;
              const isActive = selectedGenre === genre;
              return (
                <motion.button
                  key={genre}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedGenre(isActive ? null : genre)}
                  className={`relative p-6 rounded-xl border transition-all text-left ${
                    isActive
                      ? "cinema-gradient text-primary-foreground border-transparent shadow-lg shadow-primary/20"
                      : "bg-card border-border text-foreground hover:border-primary/30 card-cinema"
                  }`}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <p className="font-display text-xl">{genre}</p>
                  <p className={`text-xs mt-1 ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {films.filter((f) => f.genre.includes(genre)).length} titles
                  </p>
                </motion.button>
              );
            })}
          </div>

          {selectedGenre && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-3xl text-foreground mb-6">{selectedGenre}</h2>
              <FilmGrid films={filtered} showFilters={false} />
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
