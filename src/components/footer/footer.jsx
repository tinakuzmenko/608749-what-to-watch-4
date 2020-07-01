import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({isMainPage}) => {
  return (
    <footer className="page-footer">
      <div className="logo">
        <a href={!isMainPage ? `main.html` : null} className="logo__link logo__link--light">
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

Footer.propTypes = {
  isMainPage: PropTypes.bool.isRequired,
};

export default Footer;
