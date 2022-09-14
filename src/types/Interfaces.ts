export interface IShowItem {
  averageRuntime: number;
  dvdCountry: string | null;
  ended: string;
  externals: { tvrage: number; thetvdb: number; imdb: string };
  genres: String[];
  id: number;
  image: { medium: string; original: string };
  language: string;
  name: string;
  network: {
    id: number;
    name: string;
    country: { name: string; code: string; timezone: string };
    officialSite: string;
  };
  officialSite: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  schedule: { time: string; days: String[] };
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: string | null;
  weight: number;
}
