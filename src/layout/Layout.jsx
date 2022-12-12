import React, { useState, useEffect } from "react";

import Contents from "./Contents";
import "./Layout.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidbar from "./Sidbar";

function Layout() {
  return (
    <div className="Layout">
      <div className="LayoutContainer">
        <Navbar />
        <div class="Layoutcenter">
          <Contents class="Contents" />
          <div class="Layoutsson"></div>
          <div class="asdasd">
            <Sidbar class="Sidbar" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
