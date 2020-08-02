import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus, AppRoute} from '../../helpers/constants.js';
import {CustomPropTypes} from '../../helpers/custom-prop-types';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import history from '../../history';
import {Operations as DataOperations} from '../../store/data/data';

const MyListButton = ({authorizationStatus, movie, changeIsMovieFavorite}) => {
  const handleMovieListButtonClick = (isFavorite) => {
    return authorizationStatus === AuthorizationStatus.AUTH
      ? changeIsMovieFavorite(movie.id, isFavorite)
      : history.push(AppRoute.SIGN_IN);
  };

  const addToMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleMovieListButtonClick(true)}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  const removeFromMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleMovieListButtonClick(false)}
    >
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  return (
    <React.Fragment>
      {!movie.isFavorite ? addToMyList : removeFromMyList}
    </React.Fragment>
  );
};

MyListButton.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  movie: CustomPropTypes.MOVIE,
  changeIsMovieFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeIsMovieFavorite(movieId, isFavorite) {
    dispatch(DataOperations.changeIsMovieFavorite(movieId, isFavorite));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
