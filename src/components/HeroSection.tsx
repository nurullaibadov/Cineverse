import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play, Info, Star, Clock } from "lucide-react";
import { featuredFilm } from "@/lib/filmData";
import heroBackdrop from "@/assets/hero-backdrop.jpg";

export function HeroSection() {
  const { t } = useTranslation();
  const film = featuredFilm;

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <img
        src={heroBackdrop}
        alt={film.title}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-4 md:px-12 pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full cinema-gradient text-primary-foreground text-xs font-semibold tracking-wider uppercase mb-4">
            {t("hero.trending")}
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-foreground leading-none mb-4">
            {film.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1 text-primary">
              <Star className="w-4 h-4 fill-current" />
              {film.rating}
            </span>
            <span>{film.year}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {film.duration}
            </span>
            <span>{film.genre.join(" · ")}</span>
          </div>

          <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
            {film.overview}
          </p>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg cinema-gradient text-primary-foreground font-semibold transition-shadow hover:shadow-lg hover:shadow-primary/30"
            >
              <Play className="w-5 h-5 fill-current" />
              {t("hero.watch")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 backdrop-blur-sm text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              <Info className="w-5 h-5" />
              {t("film.more")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
