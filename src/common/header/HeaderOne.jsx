import React from 'react';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const HeaderOne = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
      };
    const closeMenu = () => {
        setIsMenuOpen(false);
      };
    
   
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    return (
        <>
            <header className="header-style-1">
                

                <div className={`header-navbar navbar-sticky ${windowWidth <= 991 ? 'mobile-menu' : ''}`} >
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="site-logo">
                                <Link to="/">
                                    {/* <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Course Thumb" class="img-fluid"/> */}
                                    <h4>Study Space</h4>
                                </Link>
                            </div>

                            <div className="offcanvas-icon d-block d-lg-none">
                                <a href="#"  onClick={openMenu} className="nav-toggler"><i className="fal fa-bars"></i></a> 
                            </div>

                            {/* <div className="header-category-menu d-none d-xl-block">
                                <ul>
                                    <li className="has-submenu">
                                        <Link to="#"><i className="fa fa-th me-2"></i>Categories</Link>

                                        <ul className="submenu">
                                            <li>
                                                <Link to="#">Design</Link>
                                                <ul className="submenu">
                                                    <li><Link to="#">Design Tools</Link></li>
                                                    <li><Link to="#">Photoshop mastering</Link></li>
                                                    <li><Link to="#">Adobe Xd Deisgn</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="#">Developemnt</Link></li>
                                            <li><Link to="#">Marketing</Link></li>
                                            <li><Link to="#">Freelancing</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div> */}

                            {/* <div className="header-search-bar d-none d-xl-block ms-4">
                                <form action="#">
                                    <input type="text" className="form-control" placeholder="Search for Course" />
                                    <Link to="#" className="search-submit"><i className="far fa-search"></i></Link>
                             </form>
                            </div> */}
                    
                            <nav className={ `site-navbar ms-auto ${ isMenuOpen ? 'menu-on': ''}` } >
                                <Nav />

                            {isMenuOpen && (
                                 <a href="#" onClick={closeMenu}  className="nav-close"><i className="fal fa-times"></i></a>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderOne;