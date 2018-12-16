import React from 'react';

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/brandnpatterson"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()} Brandon Patterson
      </a>
    </footer>
  );
};

export default Footer;
