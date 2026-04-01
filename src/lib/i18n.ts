import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: "Home", movies: "Movies", series: "TV Series", genres: "Genres", myList: "My List", search: "Search...", login: "Sign In", register: "Sign Up", logout: "Logout" },
      hero: { watch: "Watch Now", trailer: "Watch Trailer", trending: "Trending Now" },
      sections: { trending: "Trending Now", popular: "Popular Movies", topRated: "Top Rated", newReleases: "New Releases", continueWatching: "Continue Watching", recommended: "Recommended For You" },
      auth: { login: "Sign In", register: "Create Account", email: "Email", password: "Password", confirmPassword: "Confirm Password", name: "Full Name", forgotPassword: "Forgot Password?", resetPassword: "Reset Password", noAccount: "Don't have an account?", hasAccount: "Already have an account?", sendReset: "Send Reset Link", backToLogin: "Back to Sign In" },
      film: { rating: "Rating", duration: "Duration", genre: "Genre", year: "Year", director: "Director", cast: "Cast", overview: "Overview", addToList: "Add to List", play: "Play", more: "More Info" },
      footer: { about: "About", contact: "Contact", privacy: "Privacy Policy", terms: "Terms of Service", faq: "FAQ" },
      admin: { dashboard: "Dashboard", users: "Users", content: "Content", analytics: "Analytics", settings: "Settings" },
    },
  },
  ar: {
    translation: {
      nav: { home: "الرئيسية", movies: "أفلام", series: "مسلسلات", genres: "التصنيفات", myList: "قائمتي", search: "بحث...", login: "تسجيل الدخول", register: "إنشاء حساب", logout: "خروج" },
      hero: { watch: "شاهد الآن", trailer: "مشاهدة الإعلان", trending: "الأكثر رواجاً" },
      sections: { trending: "الأكثر رواجاً", popular: "أفلام شائعة", topRated: "الأعلى تقييماً", newReleases: "إصدارات جديدة", continueWatching: "متابعة المشاهدة", recommended: "مقترحة لك" },
      auth: { login: "تسجيل الدخول", register: "إنشاء حساب", email: "البريد الإلكتروني", password: "كلمة المرور", confirmPassword: "تأكيد كلمة المرور", name: "الاسم الكامل", forgotPassword: "نسيت كلمة المرور؟", resetPassword: "إعادة تعيين كلمة المرور", noAccount: "ليس لديك حساب؟", hasAccount: "لديك حساب بالفعل؟", sendReset: "إرسال رابط إعادة التعيين", backToLogin: "العودة لتسجيل الدخول" },
      film: { rating: "التقييم", duration: "المدة", genre: "النوع", year: "السنة", director: "المخرج", cast: "الممثلون", overview: "نظرة عامة", addToList: "أضف للقائمة", play: "تشغيل", more: "المزيد" },
      footer: { about: "حول", contact: "اتصل بنا", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", faq: "الأسئلة الشائعة" },
      admin: { dashboard: "لوحة التحكم", users: "المستخدمون", content: "المحتوى", analytics: "التحليلات", settings: "الإعدادات" },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
