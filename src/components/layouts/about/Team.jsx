import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
           team: [
                {
                    id: 1,
                    img: 'assets/images/award/aw-1.jpg',
                    title: 'Harish Ham',
                    text: 'SEO Expert',
                    students: '20',
                    lessons: '2',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 2,
                    img: 'assets/images/award/aw-2.jpg',
                    title: 'Harish Ham',
                    text: 'Marketer',
                    students: '20',
                    lessons: '4',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 3,
                    img: 'assets/images/award/aw-3.jpeg',
                    title: 'Harish Ham',
                    text: 'Developer',
                    students: '20',
                    lessons: '6',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 4,
                    img: 'assets/images/award/aw-4.jpeg',
                    title: 'Harish Ham',
                    text: 'SEO Expert',
                    stuendets: '20',
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
            

            <section className="instructors ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 pe-5">
                            <div className="section-heading">
                                <span className="subheading">Where we are</span>
                                <h2 className="font-lg mb-20">Our achievement</h2>
                                <p className="mb-30">A leading destination for academic excellence and holistic development. Founded with a passion for education and a commitment to nurturing future leaders, we take pride in empowering students to achieve their goals and aspirations.</p>
                                <p className='mt-2'>we believe that every student is unique and deserves personalized attention to unlock their full potential. With a team of experienced educators and industry experts, we offer a dynamic learning environment that fosters creativity, critical thinking, and problem-solving skills.</p>
                                {/* <ul className="list-item mb-40">
                                    <li><i className="fa fa-check"></i><h5>Develop your skills Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5></li>
                                    <li><i className="fa fa-check"></i><h5>Share your knowledge Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5></li>
                                    <li><i className="fa fa-check"></i><h5>Earn from globally Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5></li>
                                </ul> */}
                                <a href="#" className="btn btn-main rounded" >Know More</a>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="row masonary-item">
                            {
                            this.state.team.map((data,i) =>(

                                <div className="col-lg-6 col-md-6 col-sm-6" key={data.id}>
                                    <div className="team-item team-item-2">
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
                                                {/* <h4>{data.title}</h4> */}
                                                {/* <p>{data.text}</p> */}
                                            </div>

                                            {/* <div className="course-meta">
                                                <span className="duration"><i className="far fa-user-alt"></i>{data.students} Students</span>
                                                <span className="lessons"><i className="far fa-play-circle me-2"></i>{data.lessons} Course</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
                    
        );
    }
}

export default Team;
