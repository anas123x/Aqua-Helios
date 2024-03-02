import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        <h2>Other ways to contact us</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Fax: (123) 456-7890</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Main St, Anytown, USA</p>
        {/* Add your social media links here */}
      </div>
      <div>
        <h2>Our Location</h2>
        {/* Add a map component here */}
      </div>
      <div>
        <h2>Office Hours</h2>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
    </div>
  );
}

export default ContactPage;