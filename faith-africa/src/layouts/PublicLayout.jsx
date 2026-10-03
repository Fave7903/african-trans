import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

const PublicLayout = () => (
  <>
    <Nav />
    <main className="pt-20 md:pt-24">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default PublicLayout;
