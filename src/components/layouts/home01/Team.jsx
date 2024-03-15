import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
           team: [
                {
                    id: 1,
                    img: 'assets/images/teacher/te-1.png',
                    title: 'Dr. Padam Agrawal',
                    text: 'Ph.D, M.Sc',
                    students: '7',
                    lessons: '2',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 2,
                    img: 'assets/images/teacher/te-2.jpeg',
                    title: 'Mr. L.N. Agrawal',
                    text: 'M.Sc., B.Ed.',
                    students: '8',
                    lessons: '4',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 3,
                    img: 'assets/images/teacher/te-3.jpg',
                    title: 'Gaurav Agrawal',
                    text: 'M.Com., NET',
                    students: '12',
                    lessons: '6',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 4,
                    img: 'assets/images/teacher/te-4.jpg',
                    title: 'Manish Sharma',
                    text: 'M.Sc., B.Ed.',
                    stuendets: '6',
                    lessons: '10',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                
            ]
        }
    }

    render() {
        return (
            <section className="team pt-4">
                <div className="container">
                    <div className="row  mb-100">
                        <div className="col-lg-8 col-xl-8">
                            <div className="section-heading text-center text-lg-start">
                                <h2 className="font-lg">Top Industry Expert</h2>
                                <p>Discover Your Perfect Program In Our Courses.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="text-center text-lg-end">
                                <Link to="/about" className="btn btn-main-outline rounded">More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                    {
                        this.state.team.map((data,i) =>(

                            <div className="col-xl-3 col-lg-4 col-sm-6" key={data.id}>
                                <div className="team-item team-item-4 mb-70 mb-lg-0">
                                    <div className="team-img">
                                        <img src={data.img} alt="" className="img-fluid"/>

                                        {/* <ul className="team-socials list-inline">
                                            <li class="list-inline-item"><Link to="#"><i class={data.fb}></i></Link></li>
                                            <li class="list-inline-item"><Link to="#"><i class={data.twitter}></i></Link></li>
                                            <li class="list-inline-item"><Link to="#"><i class={data.linkedin}></i></Link></li>
                                        </ul> */}
                                    </div>
                                    <div className="team-content">
                                        <div className="team-info">
                                            <h4>{data.title}</h4>
                                            <p>{data.text}</p>
                                        </div>

                                        <div className="course-meta">
                                            <span className="duration"><i className="far fa-user-alt"></i>{data.students}+ Yrs. Exp.</span>
                                            <span className="lessons"><i className="far fa-play-circle me-2"></i>{data.lessons}+ Subject</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    
                    </div>
                </div>
            </section>

           
                    
        );
    }
}

export default Team;
