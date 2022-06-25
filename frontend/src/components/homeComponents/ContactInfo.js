import React from 'react';

const ContactInfo = () => {
  return (
    <div className='contactInfo container'>
      <div className='row'>
        <div className='col-12 col-md-4 contact-Box'>
          <div className='box-info'>
            <div className='info-image'>
              <i className='fas fa-phone-alt'></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>+62822 7713 4687</p>
          </div>
        </div>
        <div className='col-12 col-md-4 contact-Box'>
          <div className='box-info'>
            <div className='info-image'>
              <i className='fas fa-map-marker-alt'></i>
            </div>
            <h5>Headquater</h5>
            <p>Indonesia</p>
          </div>
        </div>
        <div className='col-12 col-md-4 contact-Box'>
          <div className='box-info'>
            <div className='info-image'>
              <i className='far fa-envelope'></i>
            </div>
            <h5>Email</h5>
            <p>info@cxkeeley.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
