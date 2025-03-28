const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

type TMDBRequest = {
  path: string;
  method?: string;
};

export type FetchMoviesResponse = {
  readonly page: number;
  readonly results: FetchMoviesResult[];
};

export type FetchMoviesResult = {
  readonly adult: boolean;
  readonly backdrop_path: string;
  readonly genre_ids: number[];
  readonly id: number;
  readonly original_language: string;
  readonly original_title?: string;
  readonly overview?: string;
  readonly popularity?: number;
  readonly poster_path?: string;
  readonly release_date?: string;
  readonly title?: string;
  readonly video?: boolean;
  readonly vote_average?: number;
  readonly vote_count?: number;
  readonly origin?: null;
};

const doTMDBRequest = async <T = any>({
  path,
  method = 'GET',
}: TMDBRequest): Promise<T | null> => {
  const url = `${TMDB_CONFIG.BASE_URL}${path}`;
  const options = {
    method,
    headers: TMDB_CONFIG.headers,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch movies ${response.statusText}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<FetchMoviesResult[]> => {
  const path = query
    ? `/search/movie?query=${encodeURIComponent(query)}`
    : `/discover/movie?sort_by=popularity.desc`;

  const data = await doTMDBRequest<FetchMoviesResponse>({ path });

  return data?.results || [];
};

export const fetchMovieDetails = async (
  movieId: string,
): Promise<MovieDetails | null> => {
  return doTMDBRequest<MovieDetails>({ path: `/movie/${movieId}` });
};
