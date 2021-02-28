export type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  url: string;
  image_url: string;
}

export type TypeOfSearch= {
  type: string;
}