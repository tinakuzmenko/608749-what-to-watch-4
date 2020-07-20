import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer/reducer.js';
import {connect} from "react-redux";
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import VideoPlayerFullScreen from '../video-player-full-screen/video-player-full-screen';

const MoviePlayer = ({currentMovie, onExitClick}) => {
  return (
    <div className="player">
      <VideoPlayerFullScreen
        isPlaying={false}
        source={currentMovie.videoLink}
        poster={currentMovie.poster}
      />
      <button
        type="button"
        className="player__exit"
        onClick={onExitClick}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

MoviePlayer.propTypes = {
  currentMovie: CustomPropTypes.MOVIE,
  onExitClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onExitClick() {
    dispatch(ActionCreator.stopWatchingMovie());
  },
});

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayer);
