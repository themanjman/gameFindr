export type Genre = {
  id: number;
  name: string;
};

export interface GameResult {
  count: number; // Total number of games
  next: string | null; // URL for the next page of results
  previous: string | null; // URL for the previous page of results
  results: Game[] | null; // Array of game objects
  seo_title: string; // SEO title
  seo_description: string; // SEO description
  seo_keywords: string; // SEO keywords
  seo_h1: string; // SEO H1
  noindex: boolean; // Noindex flag
  nofollow: boolean; // Nofollow flag
  description: string; // Description
  filters: Filters; // Filters applied
  nofollow_collections?: string[] | null; // Collections to not follow
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released?: null;
  tba: boolean;
  background_image?: string | null;
  rating: number;
  rating_top: number;
  ratings?: (null)[] | null;
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status?: AddedByStatus | null;
  metacritic?: null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game?: null;
  reviews_count: number;
  community_rating: number;
  saturated_color: string;
  dominant_color: string;
  platforms?: PlatformsEntity[] | null;
  parent_platforms?: ParentPlatformsEntity[] | null;
  genres?: GenresEntity[] | null;
  stores?: StoresEntity[] | null;
  clip?: null;
  tags?: TagsEntity[] | null;
  esrb_rating?: PlatformOrEsrbRating | null;
  short_screenshots?: ShortScreenshotsEntity[] | null;
}

export interface AddedByStatus {
  toplay: number;
  yet?: number | null;
}

export interface PlatformsEntity {
  platform: Platform;
  released_at?: null;
  requirements_en?: null;
  requirements_ru?: null;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image?: null;
  year_end?: null;
  year_start?: number | null;
  games_count: number;
  image_background: string;
}

export interface ParentPlatformsEntity {
  platform: PlatformOrEsrbRating1;
}

export interface PlatformOrEsrbRating1 {
  id: number;
  name: string;
  slug: string;
}

export interface GenresEntity {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface StoresEntity {
  id: number;
  store: Store;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface TagsEntity {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface PlatformOrEsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface ShortScreenshotsEntity {
  id: number;
  image: string;
}

export interface Filters {
  years?: YearsEntity[] | null; // Adjusted to match the expected structure
}

export interface YearsEntity {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years?: YearsEntity1[] | null; // Adjusted to match the expected structure
  nofollow: boolean;
  count: number;
}

export interface YearsEntity1 {
  year: number;
  count: number;
  nofollow: boolean;
}

export enum GenreEnum {
  Action = 4,
  Indie = 51,
  Adventure = 3,
  RPG = 5,
  // Strategy = 10,
  // Shooter = 2,
  // Casual = 40,
  // Simulation = 14,
  // Puzzle = 7,
  // Arcade = 11,
  // Platformer = 83,
  // Racing = 1,
  // MassivelyMultiplayer = 59,
  // Sports = 15,
  // Fighting = 6,
  // Family = 19,
  // BoardGames = 28,
  // Educational = 34,
  // Card = 17
}