import React, { Fragment } from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-black border-top border-dark">

        <div className="container text-center small py-vh-2 border-top border-dark">
          <a href="https://github.com/neeraj-22/showcase-nft" className="link-fancy link-fancy-light">View in Github</a>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer