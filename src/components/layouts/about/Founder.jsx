import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Founder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [
                {
                    id: 1,
                    img: 'assets/images/founder/f-1.png',
                    title: 'Laxmi Narayan',
                    text: 'Ph.D, M.Sc',
                    students: '7',
                    lessons: '2',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 2,
                    img: 'assets/images/founder/f2.png',
                    title: 'Padam Kumar',
                    text: 'M.Sc., B.Ed.',
                    students: '8',
                    lessons: '4',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 3,
                    img: 'assets/images/founder/f-3.png',
                    title: ' Gaurav',
                    text: 'M.Com., NET',
                    students: '12',
                    lessons: '6',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                }

            ]
        }
    }

    render() {
        return (
            <section className="team " style={{ backgroundColor: "#e7e7e7",paddingTop:"50px", paddingBottom:"50px" }}>
                <div className="container">
                    <div className="row  ">
                        <div className="col-lg-12 col-xl-12">
                            <div className="section-heading text-center text-lg-start">
                                <h2 className="font-lg">Founders:</h2>
                                <p className='text-black ' style={{fontSize:"17px"}}>Welcome to STUDY SPACE,
                                    where education meets excellence. Founded by three brothers – <strong>Laxmi Narayan, Padam Kumar,</strong> and <strong>Gaurav</strong> – our institution stands as a beacon of knowledge and innovation in education.
                                    <br/><br/>
                                    With a shared vision to provide quality education accessible to all, we embarked on this journey 10 years ago. Since then, we have been committed to nurturing young minds, fostering critical thinking, and empowering individuals to realize their full potential.
                                    <br/><br/>
                                    At <strong>STUDY SPACE</strong> we believe in holistic education that goes beyond textbooks and classrooms. Our dedicated team of educators strives to create a stimulating learning environment where students are encouraged to explore, question, and innovate. </p>
                            </div>
                        </div>

                        {/* <div className="col-xl-4 col-lg-4">
                            <div className="text-center text-lg-end">
                                <Link to="#" className="btn btn-main-outline rounded">All Instructors <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div> */}
                    </div>

                    
                </div>
            </section>



        );
    }
}

export default Founder;
