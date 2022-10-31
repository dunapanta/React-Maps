export interface PlacesResponse {
  type: string;
  query: number[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  center: number[];
  geometry: Geometry;
  context: Context[];
}

export interface Context {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  accuracy: string;
  "override:postcode": string;
}
