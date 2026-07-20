import React from 'react';

const Contact = () => {
  return (
    <div className="section white" id="contact">
      <div className="sec-title">Contact <span>Me</span></div>
      <div className="sec-line"></div>
      <div className="contact-row">
        <div className="contact-left">
          <p>Have a project in mind? I'd love to hear from you. Let's build something amazing together!</p>
          <div className="ci"><div className="ci-icon">📧</div><p><a href="mailto:adeebaashraf.tech@gmail.com">adeebaashraf.tech@gmail.com</a></p></div>
          <div className="ci"><div className="ci-icon">📍</div><p>Pakistan</p></div>
          <div className="ci"><div className="ci-icon">💼</div><p>Open to Client Work</p></div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;