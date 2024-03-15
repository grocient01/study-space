import React, { Component } from 'react';


class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            process: [
                {
                    id: 1,
                    step: '01',
                    title: 'On demand doubt classes',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.',
                    extraName: 'bg-1',
                },
                {
                    id: 2,
                    step: '02',
                    title: 'Weekly test',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.',
                    extraName: 'bg-2',
                },
                {
                    id: 3,
                    step: '03',
                    title: 'High tech classes',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
                    extraName: 'bg-3',
                },
                {
                    id: 4,
                    step: '04',
                    title: 'Expert Faculty',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
                    extraName: 'bg-1',
                },
                {
                    id: 5,
                    step: '03',
                    title: 'Pdf Notes',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
                    extraName: 'bg-1',
                },
                {
                    id: 6,
                    step: '04',
                    title: 'Career Guideline',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
                    extraName: 'bg-2',
                }
            ],

        }
    }


    render() {
        return (
        <section className="work-process section-padding">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-xl-8">
                        <div className="section-heading ">
                            <h2 className="font-lg">Start your success journey With us</h2>
                            <p>There should not any reason to not to start from today.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-xl-7 pe-xl-5 col-lg-12">
                        <div className="row">
                            {
                                  this.state.process.map((data,i) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={data.id}>
                                        <div className="step-item ">
                                            <div className={`step-number ${data.extraName}`}>{data.step}</div>
                                            <div className="step-text " style={{paddingTop:"17px"}}>
                                                <h5>{data.title}</h5>
                                                {/* <p>{data.text}</p> */}
                                            </div>
                                        </div>
                                    </div>

                                  ))
                            }
                            
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="video-section mt-3 mt-xl-0">
                            <div className="video-content">
                                <img src="/assets/images/bg/office01.jpg" alt="" className="img-fluid"/>
                                <a href="" data-lightbox="https://youtu.be/3nQNiWdeH2Q" className="video-icon video-popup">
                                    <i className="fa fa-play"></i>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        );
    }
}

export default About;
