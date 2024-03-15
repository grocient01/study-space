import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = () => {
   
    return (
        <>
             <section className="footer footer-3 pt-200">
                <div className="footer-mid">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-8 me-auto">
                                <div className="widget footer-widget mb-5 mb-lg-0">
                                    <div className="footer-logo">
                                        {/* <img src="assets/images/logo-white.png" alt="" className="img-fluid"/> */}
                                        <h3 className='text-white'>StudySpace</h3>
                                    </div>
                                    
                                    <p className="mt-4">Embrace the journey, believe in your power, and watch your dreams unfold with us.</p>

                                    <div className="footer-socials mt-5">
                                        <span className="me-2">Connect :</span>
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title">Explore</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="/about">About us</Link></li>
                                        <li><Link to="/contact">Contact us</Link></li>
                                        <li><Link to="/contact">Courses</Link></li>
                                        <li><Link to="/contact">Support</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title ">Programs</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="/contact">Foundation Course</Link></li>
                                        <li><Link to="/contact">Online classes</Link></li>
                                        <li><Link to="/contact">Pdf Notes</Link></li>
                                        {/* <li><Link to="#">Social Marketing</Link></li> */}
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title">Links</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="#">News & Blogs</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Support</Link></li>
                                        <li><Link to="#">Return Policy</Link></li>
                                    </ul>
                                </div>
                            </div> */}

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title">Address</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><a href="tel:+919024892955">+91-90248 92955</a></li>
                                        <li><a href="mailto:studyspace.org@gmail.com">studyspace.org@gmail.com</a></li>
                                        <li><a href="https://maps.app.goo.gl/LhiZuVoZxBQ2e7Y98" target='_blank'>Gali No. 7, Mahadev Nagar, Jagatpura, Jaipur, Rajasthan 302017</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-sm-12 col-lg-6">
                                <p className="mb-0 copyright text-sm-center text-lg-start">© 2023 StudySpace All rights reserved  <a href="https://themeturn.com" rel="nofollow"></a> </p>
                            </div>

                            <div className="col-xl-6 col-sm-12 col-lg-6">
                                <div className="footer-btm-links text-start text-sm-center text-lg-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link to="#"> Terms of Service</Link></li>
                                        <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed-btm-top">
                    <Link to="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up"></i></Link>
                </div>
                
            </section>
        </>
    )
}

export default FooterOne;