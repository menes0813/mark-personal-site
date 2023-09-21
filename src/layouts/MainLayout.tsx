import React, { ReactNode } from 'react'

type MainLayoutProps = {
  SideBar: ReactNode;
  MainContent: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ SideBar, MainContent }) => {
  return (
    <main>
      <aside className="sidebar" data-sidebar>
        {SideBar}
      </aside>
      <div className="main-content">
        {MainContent}
      </div>
    </main>
  )
}

export default MainLayout;
