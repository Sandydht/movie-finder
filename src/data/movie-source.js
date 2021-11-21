import axios from 'axios'

class MovieSource {
  static async searchMovie(keyword) {
    const response = await axios(`${process.env.VUE_APP_API_ENDPOINT}?apikey=${process.env.VUE_APP_API_KEY}&s=${keyword}`)
    return response.data
  }
}

export default MovieSource