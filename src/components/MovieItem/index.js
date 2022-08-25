import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
        }
      >
        {close => (
          <div className="video-popup">
            <div className="cancel-button-container">
              <button
                className="cancel-button"
                testid="closeButton"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <ReactPlayer url={videoUrl} width="380px" height="260px" controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
