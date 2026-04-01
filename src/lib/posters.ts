import poster1 from "@/assets/film-poster-1.jpg";
import poster2 from "@/assets/film-poster-2.jpg";
import poster3 from "@/assets/film-poster-3.jpg";
import poster4 from "@/assets/film-poster-4.jpg";
import poster5 from "@/assets/film-poster-5.jpg";
import poster6 from "@/assets/film-poster-6.jpg";
import poster7 from "@/assets/film-poster-7.jpg";
import poster8 from "@/assets/film-poster-8.jpg";
import poster9 from "@/assets/film-poster-9.jpg";
import poster10 from "@/assets/film-poster-10.jpg";

export const posters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10];

export function getPoster(index: number) {
  return posters[index % posters.length];
}
