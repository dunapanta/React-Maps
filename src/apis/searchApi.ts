import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    access_token:
      "pk.eyJ1IjoiZHVuYXBhbnQiLCJhIjoiY2w5dXEzeGhiMHBneTN2cnVseTNxYXZmbCJ9.BoAHGcAuIGlmhfdMyfp4jQ",
  },
});

export default searchApi;
