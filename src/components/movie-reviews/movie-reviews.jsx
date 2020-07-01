import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../utils/custom-prop-types.js';
import MovieReview from '../movie-review/movie-review.jsx';

const sliceReviews = (reviews) => {
  const sliceIndex = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, sliceIndex);
  const secondColReviews = reviews.slice(sliceIndex, reviews.length);

  return [firstColReviews, secondColReviews];
};

const MovieReviews = ({movieReviews}) => {
  const [usersReviews] = movieReviews;
  const slicedReviews = sliceReviews(usersReviews.reviews);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {slicedReviews.map((slicedReview, index) => {
          return (
            <div key={Math.random() + index} className="movie-card__reviews-col">
              {slicedReview.map((review) => <MovieReview movieReview={review} key={Math.random() + review.id} />)}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

MovieReviews.propTypes = {
  movieReviews: PropTypes.arrayOf(CustomPropTypes.REVIEW).isRequired,
};

export default MovieReviews;