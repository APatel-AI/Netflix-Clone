
const key = process.env.REACT_APP_IMDB_API_KEY

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=28&page=1`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=35&page=1`,
    requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=18&page=1`,
    requestSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=878&page=1`,
  };
  
  export default requests;
  