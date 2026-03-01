import React from 'react';
import NavbarLayout from './navigation/NavbarLayout';
import Footer from './footer/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            {/* nav */}
            <NavbarLayout />

            {/* main body */}
            <main >
                <Outlet />
            </main>
            
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Layout;