import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { films, Film } from "@/lib/filmData";
import { getPoster } from "@/lib/posters";
import { Bookmark, X, Play, Star, Trash2 } from "lucide-react";

export default function MyListPage() {
  const { t } = useTranslation();
  // Demo: preload some films into the list
  const [myList, setMyList] = useState<Film[]>(() => films.slice(0, 5));

  const removeFromList = (id: number) => {
    setMyList((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-8 px-4 md:px-12 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <Bookmark className="w-8 h-8 text-primary" />
            <h1 className="font-display text-4xl md:text-6xl text-foreground">{t("nav.myList")}</h1>
          </div>
          <p className="text-muted-foreground mb-8">Your saved films and series — {myList.length} titles.</p>

          {myList.length === 0 ? (
            <div className="text-center py-20">
              <Bookmark className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-2">Your list is empty</p>
              <p className="text-sm text-muted-foreground mb-6">Start adding films and series to build your watchlist.</p>
              <Link to="/movies" className="inline-flex px-6 py-3 rounded-lg cinema-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Browse Movies
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence>
                {myList.map((film, i) => (
                  <motion.div
                    key={film.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border card-cinema group"
                  >
                    <Link to={`/film/${film.id}`} className="w-20 h-28 md:w-24 md:h-36 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={getPoster(film.id - 1)} alt={film.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={96} height={144} />
                    </Link>
                    <div className="flex-1 min-w-0 py-1">
                      <Link to={`/film/${film.id}`}>
                        <h3 className="text-foreground font-medium text-lg hover:text-primary transition-colors">{film.title}</h3>
                      </Link>
                      <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 text-primary"><Star className="w-3 h-3 fill-current" />{film.rating}</span>
                        <span>{film.year}</span>
                        <span>{film.duration}</span>
                        <span className="hidden sm:inline">{film.genre.join(", ")}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2 hidden md:block">{film.overview}</p>
                      <div className="flex gap-2 mt-3">
                        <Link to={`/film/${film.id}`} className="flex items-center gap-1 px-4 py-1.5 rounded-lg cinema-gradient text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity">
                          <Play className="w-3 h-3 fill-current" /> Watch
                        </Link>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromList(film.id)}
                      className="self-start p-2 text-muted-foreground hover:text-accent transition-colors"
                      title="Remove from list"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
