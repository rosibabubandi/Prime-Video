import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMoviesList = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )

    return (
      <div className="prime-video-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          className="prime-video-banner"
          alt="prime video"
        />
        <div className="videos-container">
          <h1 className="movie-category-heading">Action Movies</h1>
          <div className="slider-container">
            <MoviesSlider movieDetails={actionMoviesList} />
          </div>
        </div>
        <div className="videos-container">
          <h1 className="movie-category-heading">Comedy Movies</h1>
          <div className="slider-container">
            <MoviesSlider movieDetails={comedyMoviesList} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
