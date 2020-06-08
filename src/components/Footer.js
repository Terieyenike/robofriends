import React from 'react';

const Footer = () => {
  let author = 'Oteri Eyenike';
  let address = "Lagos, Nigeria";
  return (
    <div>
      <footer>
        <address>{address}{' '}&copy; 2020</address>
        <p>
          Built by{' '}
          <a
            href={`https://twitter.com/terieyenike`}
            className='link black hover-bg-light-blue b'>
            {author}
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
