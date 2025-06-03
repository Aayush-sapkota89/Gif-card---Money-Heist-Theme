import { Category, ContentRow, Movie } from '../types';

export const categories: Category[] = [
  { id: 'home', name: 'Home' },
  { id: 'tv-shows', name: 'TV Shows' },
  { id: 'movies', name: 'Movies' },
  { id: 'new-popular', name: 'New & Popular' },
  { id: 'my-list', name: 'My List' },
];

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Stranger Things',
    thumbnailUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg',
    description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
    releaseYear: 2016,
    duration: '50m',
    rating: '16+',
    genres: ['Sci-Fi', 'Horror', 'Drama'],
    isNew: false,
    isTrending: true,
  },
  {
    id: '2',
    title: 'The Crown',
    thumbnailUrl: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
    releaseYear: 2016,
    duration: '58m',
    rating: '16+',
    genres: ['Drama', 'History', 'Biography'],
    isNew: true,
  },
  {
    id: '3',
    title: 'Dark',
    thumbnailUrl: 'https://images.pexels.com/photos/6899858/pexels-photo-6899858.jpeg',
    description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
    releaseYear: 2017,
    duration: '1h',
    rating: '16+',
    genres: ['Thriller', 'Sci-Fi', 'Mystery'],
  },
  {
    id: '4',
    title: 'Breaking Bad',
    thumbnailUrl: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    releaseYear: 2008,
    duration: '49m',
    rating: '18+',
    genres: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: '5',
    title: 'The Witcher',
    thumbnailUrl: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    releaseYear: 2019,
    duration: '1h',
    rating: '18+',
    genres: ['Fantasy', 'Action', 'Adventure'],
    isNew: true,
  },
  {
    id: '6',
    title: 'Money Heist',
    thumbnailUrl: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg',
    description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
    releaseYear: 2017,
    duration: '1h 10m',
    rating: '16+',
    genres: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: '7',
    title: 'Ozark',
    thumbnailUrl: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg',
    description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
    releaseYear: 2017,
    duration: '56m',
    rating: '18+',
    genres: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: '8',
    title: 'The Queen\'s Gambit',
    thumbnailUrl: 'https://images.pexels.com/photos/2699780/pexels-photo-2699780.jpeg',
    description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.',
    releaseYear: 2020,
    duration: '55m',
    rating: '16+',
    genres: ['Drama'],
    isNew: true,
  },
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.filter(movie => movie.isTrending),
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: movies.filter(movie => movie.isNew),
  },
  {
    id: 'popular',
    title: 'Popular on Netflix',
    movies: [...movies].sort(() => Math.random() - 0.5),
  },
  {
    id: 'watch-again',
    title: 'Watch Again',
    movies: [...movies].sort(() => Math.random() - 0.5),
  },
];

export const featuredContent: Movie = movies[0];