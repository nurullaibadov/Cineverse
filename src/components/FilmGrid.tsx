import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Play, Plus, SlidersHorizontal, Grid3X3, LayoutList, Search } from "lucide-react";
import { Film } from "@/lib/filmData";
import { getPoster } from "@/lib/posters";

interface FilmGridProps {
  films: Film[];
  showFilters?: boolean;
}

export function FilmGrid({ films, showFilters = true }: FilmGridProps) {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "year" | "title">("rating");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const genres = ["All", ...new Set(films.flatMap((f) => f.genre))];

  const filtered = films
    .filter((f) => {
      if (search && !f.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedGenre !== "All" && !f.genre.includes(selectedGenre)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <div>
      {showFilters && (
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search titles..."
              className="w-full h-11 pl-11 pr-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "year" | "title")}
                className="h-9 px-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="rating">Top Rated</option>
                <option value="year">Newest</option>
                <option value="title">A-Z</option>
              </select>
            </div>

            <div className="flex gap-1 border border-border rounded-lg p-0.5">
              <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button onClick={() => setViewMode("list")} className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                <LayoutList className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGenre(g)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedGenre === g
                      ? "cinema-gradient text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">{filtered.length} titles found</p>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((film, i) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Link to={`/film/${film.id}`} className="group block">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden card-cinema">
                  <img src={getPoster(film.id - 1)} alt={film.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={200} height={300} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/70 backdrop-blur-sm text-xs font-medium text-primary">
                    <Star className="w-3 h-3 fill-current" />
                    {film.rating}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                      <span className="w-8 h-8 rounded-full cinema-gradient flex items-center justify-center"><Play className="w-4 h-4 text-primary-foreground fill-current" /></span>
                      <span className="w-8 h-8 rounded-full border border-muted-foreground/50 flex items-center justify-center"><Plus className="w-4 h-4 text-foreground" /></span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground truncate">{film.title}</p>
                  <p className="text-xs text-muted-foreground">{film.year} · {film.genre[0]}{film.type === "series" && film.seasons ? ` · S${film.seasons}` : ""}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((film, i) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Link to={`/film/${film.id}`} className="group flex gap-4 p-3 rounded-xl bg-card border border-border card-cinema hover:border-primary/30 transition-colors">
                <div className="w-16 h-24 md:w-20 md:h-28 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={getPoster(film.id - 1)} alt={film.title} className="w-full h-full object-cover" loading="lazy" width={80} height={112} />
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="text-foreground font-medium truncate">{film.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 text-primary"><Star className="w-3 h-3 fill-current" />{film.rating}</span>
                    <span>{film.year}</span>
                    <span>{film.duration}</span>
                    <span className="hidden sm:inline">{film.genre.join(", ")}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2 hidden sm:block">{film.overview}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No titles match your filters.</p>
        </div>
      )}
    </div>
  );
}
