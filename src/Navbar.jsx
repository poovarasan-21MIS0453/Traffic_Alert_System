import React from 'react';
import './Navbar.css';

import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const handleLiveVideo = () => {
    // Open the live video feed page in a new tab
    window.open('http://192.168.255.94/', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>SafeTrack</h2>
      </div>
      <div className="navbar-buttons">
        <Link to="/" className="nav-button home-button" aria-label="Home">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>

        {/* Peak Time Button with external link */}
        <a href="https://tarp-one.vercel.app/" className="nav-button peak-time-button" aria-label="Peak Time">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>Peak Time</span>
        </a>

        <Link to="/notifications" className="nav-button bell-button" aria-label="Notifications">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </Link>

        {/* Live Video Button */}
        <button onClick={handleLiveVideo} className="nav-button live-button" aria-label="Live Video">
          <i className="fa fa-video-camera" aria-hidden="true"></i>
          <span>Live</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
