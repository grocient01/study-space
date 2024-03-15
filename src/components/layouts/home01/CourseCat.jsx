import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseCat01 extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: [
                {
                    id: 1,
                    title: 'Unleash the Power of Physics!',
                    img :  'assets/images/icon/physics.jpg',
                    extraClassName: 'bg-1',
                },
                {
                    id: 2,
                    title: 'Sparking Success One Reaction!',
                    img :  'assets/images/icon/chemistry.jpg',
                    extraClassName: 'bg-2',
                },
                {
                    id: 3,
                    title: 'Algebra Math calculation',
                    img :  'assets/images/icon/maths.jpg',
                    extraClassName: 'bg-3',
                },
                {
                    id: 4,
                    title: 'Charting Success in Commerce',
                    img :  'assets/images/icon/commerce.jpg',
                    extraClassName: 'bg-4',
                },
                {
                    id: 5,
                    title: 'Unveiling the Dynamics ',
                    img :  'assets/images/icon/ss.jpg',
                    extraClassName: 'bg-5',
                },
                
            ]
        }
    }

    render() {
        // Course category

        return (      
            <section className="course-category-3 section-padding" sty>
                <div className="container">
                    <div className="row mb-70 justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-heading text-center">
                                <h2 className="font-lg">Get strong command in all subjects</h2>
                                {/* <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                             this.state.category.map((data,i)=> (
                                 
                                <div className="col-xl col-lg-4 col-sm-6" key={data.id}>
                                    <div className={`single-course-category style-3 ${data.extraClassName}`}> 
                                        <div className="course-cat-icon">
                                            <img src={data.img} alt="" className="" style={{width:"103px",height:"103px", borderRadius:"100px"}}/>
                                        </div>

                                        <div className="course-cat-content">
                                            <h4 className="course-cat-title">
                                                <Link to="#">{data.title}</Link>
                                            </h4>
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
export default CourseCat01;