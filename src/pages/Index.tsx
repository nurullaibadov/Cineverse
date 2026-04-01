import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FilmCarousel } from "@/components/FilmCarousel";
import { GenreTags } from "@/components/GenreTags";
import { Footer } from "@/components/Footer";
import { films, trendingFilms, newReleases } from "@/lib/filmData";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="relative z-10 -mt-16">
        <FilmCarousel title={t("sections.trending")} films={trendingFilms} />
        <GenreTags />
        <FilmCarousel title={t("sections.popular")} films={films} />
        <FilmCarousel title={t("sections.newReleases")} films={newReleases} />
        <FilmCarousel title={t("sections.topRated")} films={[...films].sort((a, b) => b.rating - a.rating)} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
