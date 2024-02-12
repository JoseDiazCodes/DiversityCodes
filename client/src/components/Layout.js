import React from 'react';

// Components for common elements
import NavBar from '/NavBar';
import Footer from '/Footer';

const Layout = ({ page }) => {
  return (
    <div>
      <NavBar />
      {page}
      <Footer />
    </div>
  );
};

export default Layout;