import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import "@/lib/i18n";
import Index from "./pages/Index.tsx";
import MoviesPage from "./pages/Movies.tsx";
import SeriesPage from "./pages/Series.tsx";
import GenresPage from "./pages/Genres.tsx";
import MyListPage from "./pages/MyList.tsx";
import FilmDetailPage from "./pages/FilmDetail.tsx";
import LoginPage from "./pages/Login.tsx";
import RegisterPage from "./pages/Register.tsx";
import ForgotPasswordPage from "./pages/ForgotPassword.tsx";
import AdminPage from "./pages/Admin.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/film/:id" element={<FilmDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
