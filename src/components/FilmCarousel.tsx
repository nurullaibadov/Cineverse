import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Play, Plus } from "lucide-react";
import { Film } from "@/lib/filmData";
import { getPoster } from "@/lib/posters";

interface FilmCarouselProps {
  title: string;
  films: Film[];
}

export function FilmCarousel({ title, films }: FilmCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section className="relative py-6 md:py-8">
      <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 px-4 md:px-12">{title}</h2>
      <div className="group relative">
        <button onClick={() => scroll("left")} className="absolute left-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-r from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <div ref={scrollRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-12">
          {films.map((film) => (
            <motion.div
              key={film.id}
              className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[200px] cursor-pointer relative group/card"
              onMouseEnter={() => setHoveredId(film.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/film/${film.id}`}>
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden card-cinema">
                  <img src={getPoster(film.id - 1)} alt={film.title} className="w-full h-full object-cover" loading="lazy" width={200} height={300} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  {hoveredId === film.id && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="flex gap-2 mb-2">
                        <span className="w-8 h-8 rounded-full cinema-gradient flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary-foreground fill-current" />
                        </span>
                        <span className="w-8 h-8 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-foreground transition-colors">
                          <Plus className="w-4 h-4 text-foreground" />
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-primary">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{film.rating}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground truncate">{film.title}</p>
                  <p className="text-xs text-muted-foreground">{film.year} · {film.genre[0]}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="absolute right-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-l from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </section>
  );
}
