import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/brandnpatterson"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brandon Patterson
        </a>
      </p>
    </footer>
  );
};

export default Footer;
