import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='social-media'>
          <div className='social-icons'>
            <a
              className='social-icon-link '
              href='https://github.com/ameshalexk'
              target='_blank'
              aria-label='github'
              rel="noopener noreferrer"
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link '
              href='https://twitter.com/AmeshKuruvilla'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link '
              href='https://www.linkedin.com/in/amesh-alex-kuruvilla/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link '
              href='https://medium.com/@ameshalexusa'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='medium'
            >
              <i className='fab fa-medium' />
            </a>
          </div>
        
      </div>
    </div>
  );
}

export default Footer;
