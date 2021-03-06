import * as React from 'react';
import MovieNav from '../movie-nav/movie-nav';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {NavTabs} from '../../helpers/constants';
import {MovieInterface} from '../../types';

interface MovieCardInfoProps {
  currentMovie: MovieInterface;
  currentActiveItem: string;
  onItemClick(): void;
}

const MovieCardInfo: React.FC<MovieCardInfoProps> = ({
  currentMovie,
  onItemClick,
  currentActiveItem
}: MovieCardInfoProps) => {
  const renderScreen = () => {
    switch (currentActiveItem) {
      case NavTabs.OVERVIEW:
        return <MovieOverview
          movie={currentMovie}
        />;
      case NavTabs.DETAILS:
        return <MovieDetails
          movie={currentMovie}
        />;
      case NavTabs.REVIEWS:
        return <MovieReviews
          movie={currentMovie}
        />;
      default:
        return <MovieOverview
          movie={currentMovie}
        />;
    }
  };

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={currentMovie.posterImage} alt={currentMovie.title} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <MovieNav
            currentActiveItem={currentActiveItem}
            onItemClick={onItemClick}
          />

          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

export default MovieCardInfo;
