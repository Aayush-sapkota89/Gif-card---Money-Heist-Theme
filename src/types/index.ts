export interface Movie {
  id: string;
  title: string;
  thumbnailUrl: string;
  backdropUrl?: string;
  description?: string;
  releaseYear?: number;
  duration?: string;
  rating?: string;
  genres?: string[];
  isNew?: boolean;
  isTrending?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface ContentRow {
  id: string;
  title: string;
  movies: Movie[];
}