export interface DirectionsResponse {
  routes: Route[];
  waypoints: Waypoint[];
  code: string;
  uuid: string;
}

export interface Route {
  country_crossed: boolean;
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
  legs: Leg[];
  geometry: Geometry;
}

export interface Geometry {
  coordinates: Array<number[]>;
  type: Type;
}

export enum Type {
  LineString = "LineString",
}

export interface Leg {
  via_waypoints: any[];
  admins: Admin[];
  weight: number;
  duration: number;
  steps: Step[];
  distance: number;
  summary: string;
}

export interface Admin {
  iso_3166_1_alpha3: string;
  iso_3166_1: string;
}

export interface Step {
  intersections: Intersection[];
  maneuver: Maneuver;
  name: string;
  duration: number;
  distance: number;
  driving_side: DrivingSide;
  weight: number;
  mode: Mode;
  geometry: Geometry;
  ref?: string;
  destinations?: string;
  exits?: string;
}

export enum DrivingSide {
  Left = "left",
  Right = "right",
  SlightLeft = "slight left",
  SlightRight = "slight right",
  Straight = "straight",
}

export interface Intersection {
  entry: boolean[];
  bearings: number[];
  duration?: number;
  mapbox_streets_v8?: MapboxStreetsV8;
  is_urban?: boolean;
  admin_index: number;
  out?: number;
  weight?: number;
  geometry_index: number;
  location: number[];
  in?: number;
  turn_weight?: number;
  turn_duration?: number;
  traffic_signal?: boolean;
  lanes?: Lane[];
  classes?: ClassElement[];
  toll_collection?: TollCollection;
}

export enum ClassElement {
  Motorway = "motorway",
  Toll = "toll",
  Tunnel = "tunnel",
}

export interface Lane {
  indications: DrivingSide[];
  valid: boolean;
  active: boolean;
  valid_indication?: DrivingSide;
}

export interface MapboxStreetsV8 {
  class: MapboxStreetsV8Class;
}

export enum MapboxStreetsV8Class {
  Motorway = "motorway",
  MotorwayLink = "motorway_link",
  Primary = "primary",
  PrimaryLink = "primary_link",
  Service = "service",
  Street = "street",
  Tertiary = "tertiary",
  Trunk = "trunk",
  TrunkLink = "trunk_link",
}

export interface TollCollection {
  name?: string;
  type: string;
}

export interface Maneuver {
  type: string;
  instruction: string;
  bearing_after: number;
  bearing_before: number;
  location: number[];
  modifier?: DrivingSide;
}

export enum Mode {
  Driving = "driving",
}

export interface Waypoint {
  distance: number;
  name: string;
  location: number[];
}
