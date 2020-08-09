import React, { Fragment } from 'react';
import Header from '../components/MenusElement/MainMenu';
import MainWrapper from '../components/wrappers/MainPageWrapper';
import ContentWrapper from '../components/wrappers/MainPageWrapper';
import SideMenuWrapper from "../components/wrappers/SideMenuWrapper";
import SideBar from '../components/MenusElement/SideMenu'
import Footer from '../components/Footer'

const MainLayout = (props) => {
    return (
        <Fragment>
            <MainWrapper>
                <SideMenuWrapper 
                    showSideBar={props.showSideNavigation} 
                    toogleSideMenu={props.toogleSideBar}>
                    <SideBar />
                </SideMenuWrapper>
                <ContentWrapper>
                    <header>
                        <Header toogleSideBar={props.toogleSideBar} />
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </ContentWrapper>
            </MainWrapper>
        </Fragment>
    );
}

export default MainLayout;