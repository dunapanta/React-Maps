import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiZHVuYXBhbnQiLCJhIjoiY2w5dXEzeGhiMHBneTN2cnVseTNxYXZmbCJ9.BoAHGcAuIGlmhfdMyfp4jQ",
  },
});

export default directionsApi;
