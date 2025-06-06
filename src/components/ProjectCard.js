import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Col xs={12} md={6} className="mb-4 d-flex">
      <div
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          backgroundColor: '#fff',
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          width: '100%',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '300px',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.3s ease-in-out',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{title}</h4>
          <span style={{ fontSize: '0.95rem', color: '#555' }}>{description}</span>
        </div>
      </div>
    </Col>
  );
};
