import React from 'react';
import './welcome.css'; // If you still need this for other styles

const WelcomeMessage = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <div className="row">
        <div className="col-12">
          {/* Responsive h3 */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Welcome to Zen Hotel</h3>
          {/* Responsive h1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">A Best Place to Stay</h1>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
