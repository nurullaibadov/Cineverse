import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function LoginPage() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will integrate with Lovable Cloud
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-card border border-border rounded-2xl p-8 card-cinema">
            <div className="text-center mb-8">
              <span className="font-display text-3xl text-gradient">CINEVERSE</span>
              <h2 className="font-display text-2xl text-foreground mt-2">{t("auth.login")}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("auth.email")}
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("auth.password")}
                  className="w-full h-12 pl-11 pr-11 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  {t("auth.forgotPassword")}
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full h-12 rounded-lg cinema-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t("auth.login")}
              </motion.button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              {t("auth.noAccount")}{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                {t("auth.register")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
