import api from "./services/api"

const REACT_APP_API_KEY_TMDB = 'f0dfd19a0bb045afd092170f61e78676'

const basicFetch = async (endpoint: string) => {
  const data = api.get(endpoint).then(res => res.data)
  return data
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
      }
    ]
  },
  getMovieInfo: async (movieId: string, type: string) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${REACT_APP_API_KEY_TMDB}`)
          break;
      }
    }

    return info;
  }
}