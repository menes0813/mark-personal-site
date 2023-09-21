import React from "react";
import "./App.css";

import { SideBar, NavBar } from "components";
import { About, Blog, Portfolio, Resume, Contact } from "pages";
import { NavProvider } from "providers/NavProvider";
import MainLayout from "layouts/MainLayout";

const App: React.FC = () => {
  return (
    <NavProvider>
      <MainLayout
        SideBar={<SideBar />}
        MainContent={
          <>
            <NavBar />
            <About />
            <Resume />
            <Portfolio />
            <Blog />
            <Contact />
          </>
        }
      />
    </NavProvider>
  );
};

export default App;
