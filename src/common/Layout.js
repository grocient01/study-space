import React from 'react';
import HeaderTwo from './header/HeaderTwo';
import FooterTwo from './footer/FooterTwo';
import HeaderOne from './header/HeaderOne';
import FooterOne from './footer/FooterOne';

const Layout = ( { children } ) => {
    return (
        <>
            <main className="main-wrapper">
                <HeaderOne/>
                { children }
                <FooterOne />
            </main>
        </>
    )
}
export default Layout;