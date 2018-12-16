import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  message: string.isRequired
};

const Header = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

Header.propTypes = propTypes;

export default Header;
