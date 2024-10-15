import React from 'react';
import './welcome.css';

const WelcomeMessage = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          {/* Responsive h3 */}
          <h3 className="display-1 d-none d-sm-block  fw-semibold">Welcome to Zen Hotel</h3>
          {/* Responsive h1 */}
          <h1 className="display-2 d-none d-sm-block fw-light">A Best Place to Stay</h1>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
