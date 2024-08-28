import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUserAlt,
  FaSearchLocation,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import TechnicianCarousel from "../TechnicianCarousel";

function LandingPage() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [applianceType, setApplianceType] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/locations")
      .then((response) => setLocations(response.data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handleApplianceSearch = (e) => {
    const query = e.target.value;
    setApplianceType(query);

    if (query.length > 2) {
      axios
        .get(`http://localhost:5000/api/suggest-appliances?query=${query}`)
        .then((response) => setSuggestions(response.data))
        .catch((error) => console.error("Error fetching suggestions:", error));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="Header-container">
          <div className="logo">argon</div>
          <div className="header-buttons">
            <Link to="/technician-login" className="login-btn2">
              Biz Login
            </Link>
            <Link to="/user-login" className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </header>

      <section className="section2">
        <div className="section-container">
          <div className="card1">
            <h1 className="heading">Take care of your home needs now!</h1>
            <p className="sub-heading">
              ServicePro is your one-stop solution to troubleshoot, choose a
              vendor and book a technician
            </p>

            <div className="search-section">
              <select
                className="form-control"
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map(
                  (location) => (
                    console.log(location.location),
                    (
                      <option key={location.id} value={location.name}>
                        {location.location}
                      </option>
                    )
                  )
                )}
              </select>
              <br />
              <input
                type="text"
                className="search-input"
                placeholder="Search Home Appliances"
                value={applianceType}
                onChange={handleApplianceSearch}
              />
              <button className="search-btn">Search</button>
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <img
            src="https://enajemca.com/img/home.svg"
            alt="logo"
            className="logo"
          />
        </div>
      </section>

      <section className="technicians">
        <TechnicianCarousel />
      </section>

      <section className="how-it-works">
        <div className="steps-container">
          <h2>Book a request in 3 simple steps</h2>
          <div className="steps">
            <div className="step">
              <img
                src="https://cogstudios.in/img/page_web_hosting.svg"
                alt="img1"
                className="steps-logo"
              />
              <div className="desc">
                <h3>Provide your appliance details</h3>
                <p>Let us know your appliance details and your location.</p>
              </div>
            </div>
            <div className="step">
              <img
                src="https://site.surveysparrow.com/wp-content/uploads/2022/01/choosing-quotas.png"
                alt="img2"
                className="steps-logo"
              />
              <div className="desc"></div>
              <h3>Choose your technician</h3>
              <p>Select from a wide variety of technicians and services.</p>
            </div>
          
          <div className="step">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSK5zFa6Jhb5v0LzA_TRSzc_4SCtozt9XCjojFkFdSmGTv7KsXJ"
              alt="img3"
              className="steps-logo"
            />
            <div className="desc">
              <h3>Get it fixed!</h3>
              <p>
                The technician arrives and your appliance gets fixed quickly.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

    



      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">argon</div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 argon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
