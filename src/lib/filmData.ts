export interface Film {
  id: number;
  title: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  director: string;
  cast: string[];
  overview: string;
  poster: string;
  backdrop: string;
  featured?: boolean;
  type: "movie" | "series";
  seasons?: number;
  episodes?: number;
}

export const films: Film[] = [
  {
    id: 1, title: "The Midnight Protocol", year: 2024, rating: 8.7, duration: "2h 18m",
    genre: ["Sci-Fi", "Thriller"], director: "Elena Voss", type: "movie",
    cast: ["Marcus Chen", "Sophia Blake", "James Rivera"],
    overview: "In a world where memories can be digitally stolen, a rogue hacker must navigate a web of corporate espionage to recover her own past before it's erased forever.",
    poster: "", backdrop: "", featured: true,
  },
  {
    id: 2, title: "Crimson Horizon", year: 2024, rating: 8.2, duration: "2h 5m",
    genre: ["Action", "Drama"], director: "Raj Patel", type: "movie",
    cast: ["Liam Foster", "Aisha Koroma", "David Park"],
    overview: "A former war correspondent returns to a conflict zone to rescue a source, only to uncover a conspiracy that reaches the highest levels of power.",
    poster: "", backdrop: "",
  },
  {
    id: 3, title: "Echoes of Tomorrow", year: 2025, rating: 9.1, duration: "2h 32m",
    genre: ["Drama", "Romance"], director: "Marie Dubois", type: "movie",
    cast: ["Claire Fontaine", "Alexander Wright", "Nina Yamamoto"],
    overview: "Two strangers connected across parallel timelines must find each other before their worlds collapse into one devastating reality.",
    poster: "", backdrop: "",
  },
  {
    id: 4, title: "The Last Cartographer", year: 2024, rating: 7.9, duration: "1h 58m",
    genre: ["Adventure", "Mystery"], director: "Tomas Berg", type: "movie",
    cast: ["Hugo Strand", "Fatima Al-Rashid", "Peter O'Brien"],
    overview: "An aging mapmaker discovers that the uncharted territory on his final map holds the secret to an ancient civilization and a personal redemption.",
    poster: "", backdrop: "",
  },
  {
    id: 5, title: "Neon Requiem", year: 2025, rating: 8.5, duration: "2h 12m",
    genre: ["Sci-Fi", "Noir"], director: "Yuki Tanaka", type: "movie",
    cast: ["Kenji Moto", "Valentina Cruz", "Isaac Newton Jr."],
    overview: "In a rain-soaked megalopolis, a synthetic detective investigates a series of murders that blur the line between human and machine consciousness.",
    poster: "", backdrop: "",
  },
  {
    id: 6, title: "Whispers in the Wind", year: 2024, rating: 7.6, duration: "1h 45m",
    genre: ["Horror", "Thriller"], director: "Sarah Mitchell", type: "movie",
    cast: ["Emily Torres", "Brandon Hayes", "Lin Wei"],
    overview: "A family moves to a remote farmhouse only to discover that the whispering winds carry the voices of those who never left.",
    poster: "", backdrop: "",
  },
  {
    id: 7, title: "Golden Age", year: 2025, rating: 8.8, duration: "2h 25m",
    genre: ["Drama", "History"], director: "Antonio Rossi", type: "movie",
    cast: ["Marco Bellini", "Helena Stavros", "Jean-Pierre Moreau"],
    overview: "The untold story of a forgotten artist whose masterpiece changed the course of modern art—and the price she paid for her genius.",
    poster: "", backdrop: "",
  },
  {
    id: 8, title: "Velocity", year: 2024, rating: 7.4, duration: "1h 52m",
    genre: ["Action", "Sci-Fi"], director: "Mike Thompson", type: "movie",
    cast: ["Derek Stone", "Priya Sharma", "Carlos Mendez"],
    overview: "When a prototype hyperdrive is stolen, an unlikely team of pilots must race across the galaxy to prevent an interstellar war.",
    poster: "", backdrop: "",
  },
  {
    id: 9, title: "The Silence Between", year: 2025, rating: 8.3, duration: "2h 1m",
    genre: ["Drama", "Psychological"], director: "Anna Kowalski", type: "movie",
    cast: ["Maria Jensen", "Thomas Black", "Yuna Park"],
    overview: "A therapist begins to lose grip on reality when her patient's delusions start manifesting in her own life.",
    poster: "", backdrop: "",
  },
  {
    id: 10, title: "Ocean's Lament", year: 2024, rating: 7.8, duration: "1h 48m",
    genre: ["Animation", "Fantasy"], director: "Studio Lumière", type: "movie",
    cast: ["Voice Cast Ensemble"],
    overview: "A young mermaid embarks on a breathtaking journey across enchanted seas to restore the lost song that keeps the ocean alive.",
    poster: "", backdrop: "",
  },
  // TV Series
  {
    id: 11, title: "Shadow Network", year: 2024, rating: 8.9, duration: "55m",
    genre: ["Thriller", "Drama"], director: "Chris Nolan Jr.", type: "series",
    seasons: 2, episodes: 16,
    cast: ["Ryan Kessler", "Diana Morales", "Tariq Nasri"],
    overview: "An elite cybersecurity team uncovers a global conspiracy when routine hacks reveal a shadow government controlling world events from the dark web.",
    poster: "", backdrop: "",
  },
  {
    id: 12, title: "The Alchemist's Apprentice", year: 2025, rating: 8.6, duration: "50m",
    genre: ["Fantasy", "Adventure"], director: "Fiona Gallagher", type: "series",
    seasons: 1, episodes: 10,
    cast: ["Lily Chang", "Oscar Wilde III", "Zara Ahmed"],
    overview: "In a world where magic is fading, a young orphan discovers she holds the key to restoring the ancient art of alchemy—but dark forces want the power for themselves.",
    poster: "", backdrop: "",
  },
  {
    id: 13, title: "Fractured", year: 2024, rating: 8.1, duration: "45m",
    genre: ["Psychological", "Mystery"], director: "Henrik Larsen", type: "series",
    seasons: 3, episodes: 24,
    cast: ["Ingrid Holm", "Pavel Petrov", "Chloe Martin"],
    overview: "A forensic psychologist with a fragmented memory discovers each case she solves reveals another piece of a terrifying puzzle from her own past.",
    poster: "", backdrop: "",
  },
  {
    id: 14, title: "Empire of Dust", year: 2025, rating: 9.0, duration: "60m",
    genre: ["History", "Drama"], director: "Amara Okafor", type: "series",
    seasons: 1, episodes: 8,
    cast: ["Idris Mohammed", "Nkechi Eze", "Samuel Osei"],
    overview: "The rise and fall of three interconnected dynasties across centuries, told through the eyes of the women who truly held power behind the thrones.",
    poster: "", backdrop: "",
  },
  {
    id: 15, title: "Lightspeed", year: 2024, rating: 7.7, duration: "42m",
    genre: ["Sci-Fi", "Comedy"], director: "Jake Peralta", type: "series",
    seasons: 2, episodes: 20,
    cast: ["Ben Torres", "Amy Liu", "Rosa Diaz-Chen"],
    overview: "The crew of humanity's first faster-than-light ship discovers that intergalactic travel comes with hilariously unexpected consequences and bizarre alien encounters.",
    poster: "", backdrop: "",
  },
  {
    id: 16, title: "Beneath the Surface", year: 2025, rating: 8.4, duration: "48m",
    genre: ["Horror", "Sci-Fi"], director: "Jordan Peele Jr.", type: "series",
    seasons: 1, episodes: 6,
    cast: ["Kwame Asante", "Sarah Connor II", "Miguel Santos"],
    overview: "Researchers at a deep-sea station begin experiencing shared hallucinations that reveal something ancient and malevolent awakening in the ocean trenches.",
    poster: "", backdrop: "",
  },
];

export const movies = films.filter((f) => f.type === "movie");
export const series = films.filter((f) => f.type === "series");
export const featuredFilm = films.find((f) => f.featured) || films[0];
export const trendingFilms = films.filter((f) => f.rating >= 8.0);
export const newReleases = films.filter((f) => f.year === 2025);
export const allGenres = [...new Set(films.flatMap((f) => f.genre))];
