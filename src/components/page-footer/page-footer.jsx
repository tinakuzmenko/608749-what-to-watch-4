import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Pages} from '../../helpers/constants.js';

const PageFooter = ({isMainPage}) => {
  return (
    <footer className="page-footer">
      <div className="logo">
        <a
          className="logo__link logo__link--light"
          href={!isMainPage ? `main.html` : null}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

PageFooter.propTypes = {
  isMainPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isMainPage: state.currentPage === Pages.MAIN,
});

export default connect(mapStateToProps)(PageFooter);
