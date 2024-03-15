import React, { Component } from 'react';
import Slider from "react-slick";
import { HomeTestimonial } from '../../../utils/script';

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: 'assets/images/clients/im-1.jpg',
                    text: `Outstanding coaching! My child's grades soared with personalized attention and engaging lessons. Highly recommended for academic excellence.`,
                    name: 'John Doe',
                    desigantion: 'AIIMS AIR-1',
                },
                {
                    id:2,
                    img: 'assets/images/clients/im-1.jpg',
                    text: 'Exceptional coaching class! Experienced tutors, supportive environment, and effective teaching methods led to noticeable improvement.',
                    name: 'Cory Zamora',
                    desigantion: 'IIT AIR-10',
                },
                {
                    id: 3,
                    img: 'assets/images/clients/im-1.jpg',
                    text: `Transformative coaching! The dedicated team fosters confidence and motivation, resulting in impressive progress. Thank you for nurturing my child's potential.`,
                    name: 'Jackie Sanders',
                    desigantion: 'CAT AIR-2',
                },
                {
                    id:4,
                    img: 'assets/images/clients/im-1.jpg',
                    text: `Top-notch coaching service! Expert instructors, tailored curriculum, and regular feedback significantly enhanced my child's learning journey. `,
                    name: 'Nikolas Brooten',
                    desigantion: 'NET AIR-6',
                },
                {
                    id:5,
                    img: 'assets/images/clients/im-1.jpg',
                    text: 'Fantastic coaching experience! Professional staff, comprehensive resources, and a results-driven approach ensure success. A game-changer.',
                    name: 'Terry Ambady',
                    desigantion: 'IIT JEE AIR-1',
                },
            ]
        }
    }

    render() {
        
        return (

            <section className=" section-padding bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading text-center mb-50">
                                <h2 className="font-lg">Our Students Says</h2>
                                <p>Discover Your Perfect Program In Our Courses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-12">
                            <div className="testimonials-slides">
                                <Slider {...HomeTestimonial} >
                                {
                                    this.state.testimonial.map((data,i) => (
                                        <div class="testimonial-item" key={data.id}>
                                            <div class="testimonial-inner">
                                                <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
                                                
                                                    <div class="testimonial-text mb-30">
                                                        {data.text}
                                                    </div>

                                                    <div class="client-info d-flex align-items-center">
                                                        <div class="client-img">
                                                            <img src={data.img} alt="" class="img-fluid"/>
                                                        </div>
                                                        <div class="testimonial-author">
                                                            <h4>{data.name}</h4>
                                                            <span class="meta" style={{color:"black"}}>{data.desigantion}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                                    
                                </Slider>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
        );
    }
}

export default Review;
