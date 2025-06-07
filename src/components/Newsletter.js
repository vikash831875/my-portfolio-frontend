import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
     <Col xs={12}>
  <div className="newsletter-bx wow slideInUp">
    <Row className="align-items-center">
      {/* Text and Alert Section */}
      <Col xs={12} md={12} lg={5} className="mb-3 mb-lg-0">
        <h3>
          Subscribe to our Newsletter<br />
          & Never miss latest updates
        </h3>
        {status === 'sending' && <Alert>Sending...</Alert>}
        {status === 'error' && <Alert variant="danger">{message}</Alert>}
        {status === 'success' && <Alert variant="success">{message}</Alert>}
      </Col>

      {/* Form Section */}
      <Col xs={12} md={12} lg={7}>
       <form onSubmit={handleSubmit} className="newsletter-form">
  <div className="new-email-bx d-flex flex-column flex-md-row align-items-stretch gap-2">
    <input
      value={email}
      type="email"
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      className="form-control p-3 rounded-3 shadow-sm"
      required
    />
    <button
      type="submit"
      className="btn btn-primary px-4 py-2 rounded-3 shadow-sm fw-semibold"
    >
      Subscribe
    </button>
  </div>
</form>

      </Col>
    </Row>
  </div>
</Col>

  )
}
