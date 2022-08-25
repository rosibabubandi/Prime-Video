import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {movieDetails} = props

  return (
    <Slider {...settings}>
      {movieDetails.map(movie => (
        <MovieItem key={movie.id} movieDetails={movie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
