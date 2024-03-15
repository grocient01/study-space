import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ContactUsForm from './ContactForm';

class ContactInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        contacts: [
                {
                    id: 1,
                    icon: 'fa fa-envelope',
                    title: 'studyspace.org@gmail.com',
                    name: 'email'
                },  
                {
                    id: 2,
                    icon: 'fa fa-phone-alt',
                    title: '+91-90248 92955',
                    name: "mobile"
                },  
                {
                    id: 3,
                    icon: 'fa fa-map-marker',
                    title: 'Gali No. 7, Mahadev Nagar, Jagatpura, Jaipur, Rajasthan 302017 ',
                    name: 'address'
                },
                
            ]
        }
    }
    render() {
        return (
         <section className="contact section-padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-5">
                       <div className="contact-info-wrapper mb-5 mb-lg-0">
                           <h4>Get in Touch:  <br />Connect with StudySpace Experts for Enquiries </h4>
                           <p>We are always here to help you 24*7</p>
        
                            {
                                this.state.contacts.map((data,i) => (
                                <div className="contact-item" key={data.id}>
                                    <i className={data.icon}></i>
                                    {data.name == 'email' ? <h5><a href="mailto:studyspace.org@gmail.com">{data.title}</a></h5> : data.name == 'mobile' ? <h5><a href="tel:+919024892955">{data.title}</a></h5> : data.name == 'address' ? <h5><a href="">{data.title}</a></h5> : "" }
                                    {/* <h5>{data.title}</h5> */}
                                </div>
                                ))
                            }
                        
                       </div>
                    </div>
        
                    <div className="col-xl-7 col-lg-6">
                       <ContactUsForm formStyle="contact__form form-row " />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"10px", padding:"20px"}} className='container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56982.90885462343!2d75.78761988351035!3d26.794376238206944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc82e759d198d%3A0x7a67434c1b8a2e20!2sSTUDY%20SPACE!5e0!3m2!1sen!2sin!4v1709356558941!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
            </div>
            </section>
        
        );
    }
}

export default ContactInfo;
