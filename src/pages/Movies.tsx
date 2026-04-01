import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FilmGrid } from "@/components/FilmGrid";
import { movies } from "@/lib/filmData";

export default function MoviesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-8 px-4 md:px-12 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-2">{t("nav.movies")}</h1>
          <p className="text-muted-foreground mb-8">Discover the latest and greatest films from around the world.</p>
          <FilmGrid films={movies} />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
