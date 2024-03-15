import React from 'react';
import { PageBanner,Counter, AboutComp,Features,Team}  from '../layouts/about/index';
import Layout from '../../common/Layout';
import Founder from '../layouts/about/Founder';
import { Review } from '../layouts/home01';


const AboutMain = () => {
    return (
        <div className="about">       
            <Layout>       
                    {/* <PageBanner
                        title="About us"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="About"
                        /> */}
                    <Founder/>
                    <Team />
                    <Features />
                    <Counter />
                    {/* <AboutComp /> */}
                    <Review/>
            </Layout>
        </div>
    );
}

export default AboutMain;