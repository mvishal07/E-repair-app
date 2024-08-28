import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Card, Button } from 'react-bootstrap';

import './index.css'
function TechnicianCarousel() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/technicians')
      .then((response) => setTechnicians(response.data))
      .catch((error) => console.error('Error fetching technicians:', error));
  }, []);

  return (
    <div className="technician-carousel-container">
      <h1 className='heading7'>Featured Technicians</h1>
      <div indicators={false} className="carousel-container">
        <ul className='technician-list'>
        {technicians.map((tech) => (
          <div key={tech.id} className="carousel-item">
            <Card className="technician-card">
              <Card.Img variant="top" src={tech.photo} className="technician-photo" />
              <Card.Body>
                <Card.Title>{tech.name}</Card.Title>
                <Card.Text>
                  {tech.specialization}
                  <br />
                  Rating: {tech.rating}
                  <br />
                  {tech.description}
                </Card.Text>
                <Button variant="primary" className="contact-btn">
                  Contact
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default TechnicianCarousel;
