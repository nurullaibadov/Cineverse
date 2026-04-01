import { motion } from "framer-motion";
import { allGenres } from "@/lib/filmData";

export function GenreTags() {
  const colors = [
    "from-primary to-accent",
    "from-accent to-primary",
    "from-primary/80 to-accent/80",
  ];

  return (
    <section className="py-6 px-4 md:px-12">
      <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">Browse by Genre</h2>
      <div className="flex flex-wrap gap-3">
        {allGenres.map((genre, i) => (
          <motion.button
            key={genre}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${colors[i % colors.length]} text-primary-foreground text-sm font-medium shadow-md hover:shadow-lg transition-shadow`}
          >
            {genre}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
