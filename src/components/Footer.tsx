import { useTranslation } from "react-i18next";
import { Film as FilmIcon, Github, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="font-display text-2xl text-gradient">CINEVERSE</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Your ultimate destination for movies and TV series. Discover, watch, and share.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg text-foreground mb-3">Navigate</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">{t("nav.home")}</Link>
              <Link to="/movies" className="hover:text-foreground transition-colors">{t("nav.movies")}</Link>
              <Link to="/series" className="hover:text-foreground transition-colors">{t("nav.series")}</Link>
              <Link to="/genres" className="hover:text-foreground transition-colors">{t("nav.genres")}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg text-foreground mb-3">Legal</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t("footer.terms")}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t("footer.faq")}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t("footer.contact")}</a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg text-foreground mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          © 2025 CineVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
