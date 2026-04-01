import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/lib/theme";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sun, Moon, Globe, Menu, X, User } from "lucide-react";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const navLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.movies"), path: "/movies" },
    { label: t("nav.series"), path: "/series" },
    { label: t("nav.genres"), path: "/genres" },
    { label: t("nav.myList"), path: "/my-list" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors">
      <div className="bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between h-16 px-4 md:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl text-gradient">CINEVERSE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="h-8 bg-secondary border border-border rounded-lg px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={t("nav.search")}
                  autoFocus
                />
              )}
            </AnimatePresence>
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleLang} className="p-2 text-muted-foreground hover:text-foreground transition-colors" title="Switch language">
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={toggle} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/login" className="hidden md:flex items-center gap-1 px-4 py-2 rounded-lg cinema-gradient text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              <User className="w-4 h-4" />
              {t("nav.login")}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2 ${
                      isActive(link.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1 px-4 py-2 rounded-lg cinema-gradient text-primary-foreground text-sm font-medium mt-2"
                >
                  <User className="w-4 h-4" />
                  {t("nav.login")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
