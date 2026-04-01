import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FilmCarousel } from "@/components/FilmCarousel";
import { films } from "@/lib/filmData";
import { getPoster } from "@/lib/posters";
import { Star, Clock, Calendar, Play, Plus, Share2, ArrowLeft, User, Clapperboard } from "lucide-react";

export default function FilmDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const film = films.find((f) => f.id === Number(id));

  if (!film) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-2xl text-muted-foreground mb-4">Film not found</p>
          <Link to="/" className="text-primary hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  const relatedFilms = films.filter((f) => f.id !== film.id && f.genre.some((g) => film.genre.includes(g)));
  const poster = getPoster(film.id - 1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero backdrop */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img src={poster} alt={film.title} className="absolute inset-0 w-full h-full object-cover object-top blur-sm scale-110" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <main className="relative z-10 -mt-64 md:-mt-72 px-4 md:px-12 max-w-[1200px] mx-auto pb-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[200px] md:w-[280px] flex-shrink-0 mx-auto md:mx-0"
          >
            <div className="aspect-[2/3] rounded-xl overflow-hidden card-cinema shadow-2xl">
              <img src={poster} alt={film.title} className="w-full h-full object-cover" width={280} height={420} />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {film.genre.map((g) => (
                <span key={g} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{g}</span>
              ))}
              {film.type === "series" && (
                <span className="px-3 py-1 rounded-full cinema-gradient text-primary-foreground text-xs font-medium">
                  TV Series
                </span>
              )}
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight">{film.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1 text-primary text-lg font-semibold">
                <Star className="w-5 h-5 fill-current" /> {film.rating}
              </span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {film.year}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {film.duration}</span>
              {film.type === "series" && film.seasons && (
                <span>{film.seasons} Season{film.seasons > 1 ? "s" : ""} · {film.episodes} Episodes</span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-8 py-3 rounded-lg cinema-gradient text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-shadow">
                <Play className="w-5 h-5 fill-current" /> {t("film.play")}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors">
                <Plus className="w-5 h-5" /> {t("film.addToList")}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-3 rounded-lg border border-border bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Overview */}
            <div className="mt-8">
              <h3 className="font-display text-xl text-foreground mb-2">{t("film.overview")}</h3>
              <p className="text-muted-foreground leading-relaxed">{film.overview}</p>
            </div>

            {/* Director & Cast */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-display text-lg text-foreground mb-2 flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-primary" /> {t("film.director")}
                </h3>
                <p className="text-muted-foreground">{film.director}</p>
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" /> {t("film.cast")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {film.cast.map((actor) => (
                    <span key={actor} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">{actor}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {relatedFilms.length > 0 && (
          <div className="mt-16">
            <FilmCarousel title={t("sections.recommended")} films={relatedFilms} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
