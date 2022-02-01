import axios from "axios";

// REACT_APP_API_KEY_TMDB=f0dfd19a0bb045afd092170f61e78676
// REACT_APP_API_BASE=https://api.themoviedb.org/3

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api;