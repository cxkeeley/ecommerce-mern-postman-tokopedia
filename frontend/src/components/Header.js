import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className='Announcement '>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center display-none'>
              <p>+62-822-7713-4687</p>
              <p>info@cxkeeley.com</p>
            </div>
            <div className=' col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center'>
              <Link to=''>
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link to=''>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link to=''>
                <i className='fab fa-linkedin-in'></i>
              </Link>
              <Link to=''>
                <i className='fab fa-youtube'></i>
              </Link>
              <Link to=''>
                <i className='fab fa-pinterest-p'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Top Header */}
      {/* Main Header */}
      <div className='header'>
        <div className='container'>
          {/* Mobile Header */}
          <div className='mobile-header'>
            <div className='container'>
              <div className='row'>
                <div className='col-6 d-flex align-items-center'>
                  <Link className='navbar-brand' to='/'>
                    <img src='/assets/logo.png' alt='logo' />
                  </Link>
                </div>
                <div className='col-6 d-flex align-items-center justify-content-end Login-Register'>
                  <div className='btn-group'>
                    <button
                      type='button'
                      className='name-button dropdown-toggle'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='fas fa-user-circle'></i>
                    </button>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to='/profile'>
                        Profile
                      </Link>
                      <Link className='dropdown-item' to='#'>
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link className='cart-mobile-icon' to='/cart'>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='badge'>4</span>
                  </Link>
                </div>
                <div className='col-12 d-flex align-items-center'>
                  <form className='input-group'>
                    <input
                      type='search'
                      className='form-control rounded search'
                      placeholder='Search'
                    />
                    <button type='submit' className='search-button rounded'>
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Mobile Header */}
          {/* Desktop Header */}
          <div className='pc-header'>
            <div className='row'>
              <div className='col-md-3 col-4 d-flex align-items-center'>
                <Link className='navbar-brand' to='/'>
                  <img alt='logo' src='/assets/logo.png' />
                </Link>
              </div>
              <div className='col-md-6 col-8 d-flex align-items-center'>
                <form className='input-group'>
                  <input
                    type='search'
                    className='form-control rounded search'
                    placeholder='Search'
                  />
                  <button type='submit' className='search-button rounded'>
                    search
                  </button>
                </form>
              </div>
              <div className='col-md-3 d-flex align-items-center justify-content-end Login-Register'>
                <div className='btn-group'>
                  <button
                    type='button'
                    className='name-button dropdown-toggle'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Hi, Admin Doe
                  </button>
                  <div className='dropdown-menu'>
                    <Link className='dropdown-item' to='/profile'>
                      Profile
                    </Link>

                    <Link className='dropdown-item' to='#'>
                      Logout
                    </Link>
                  </div>
                </div>

                <Link to='/cart'>
                  <i className='fas fa-shopping-cart'></i>
                  <span className='badge'>4</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
