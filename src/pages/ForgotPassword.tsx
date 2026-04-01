import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 card-cinema">
            <div className="text-center mb-8">
              <span className="font-display text-3xl text-gradient">CINEVERSE</span>
              <h2 className="font-display text-2xl text-foreground mt-2">{t("auth.resetPassword")}</h2>
            </div>
            {sent ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full cinema-gradient mx-auto flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">Check your email for a password reset link.</p>
                <Link to="/login" className="inline-flex items-center gap-1 text-primary text-sm hover:underline">
                  <ArrowLeft className="w-4 h-4" /> {t("auth.backToLogin")}
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input type="email" placeholder={t("auth.email")} className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all" required />
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full h-12 rounded-lg cinema-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                  {t("auth.sendReset")}
                </motion.button>
                <div className="text-center">
                  <Link to="/login" className="inline-flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" /> {t("auth.backToLogin")}
                  </Link>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
