import React from 'react';
import Title from './Title';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Title title="Contact" />
      <div className="flex social">
        <a href="https://www.linkedin.com/in/shankar-pandey/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/shankar.pandey.988/" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://github.com/shankarpandey7230" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>
      <div className="flex-center">
        <a
          href="mailto:shankarpandey7230@gmail.com"
          className="email-section flex-center"
        >
          <span>shankarpandey7230@gmail.com</span>
          <div className="email-icon flex-center">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
